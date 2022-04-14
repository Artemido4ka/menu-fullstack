import { UsersService } from './../users/users.service';
import { ProductsService } from './../products/products.service';
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const solver = require('javascript-lp-solver');

//@TODO check calculateNeededElements and how to return this
@Injectable()
export class RecommendationService {
  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
  ) {}

  async getRecommendation(userId: any) {
    const products = await this.productsService.getAllProducts();
    const user = await this.usersService.getUser(userId);

    //calculate needed fats proteins and carbons for user
    const constraints = await this.calculateNeededElements(user);

    //create variables for algorithm
    const variables = await this.createVariables(products);

    const model = {
      optimize: 'price',
      opType: 'min',
      constraints,
      variables,
    };

    const results = solver.Solve(model);
    console.log(results);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  calculateNeededElements = async ({ weight, height, age, activity, sex }) => {
    const needCalories =
      sex === 'female'
        ? (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * activity
        : (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) * activity;

    // return {
    //   fats: { max: (needCalories * 0.3) / 9 / 3 },
    //   proteins: { max: (needCalories * 0.3) / 4 / 5 },
    //   carbohydrates: { max: (needCalories * 0.4) / 4 / 5 },
    // };
    return {
      fats: { min: 15 },
      proteins: { min: 17 },
      carbohydrates: { min: 58 },
    };
  };

  createVariables = async (products) => {
    const variables: any = {};
    products.forEach(
      (product, i) =>
        (variables[`x${i + 1}`] = {
          fats: product.fats,
          proteins: product.proteins,
          carbohydrates: product.carbohydrates,
          price: product.price,
        }),
    );
    return variables;
  };
}
