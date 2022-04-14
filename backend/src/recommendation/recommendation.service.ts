import { UsersService } from './../users/users.service';
import { ProductsService } from './../products/products.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SimpleSimplex = require('simple-simplex');

@Injectable()
export class RecommendationService {
  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
  ) {}

  async getRecommendation(userId: any) {
    const user = await this.usersService.getUser(userId);
    //calculate needed fats proteins and carbons for user
    const needElements = await this.calculateNeededElements(user);
    console.log(needElements);

    const products = await this.productsService.getAllProducts();
    const objective: any = {};
    products.forEach((product, i) => (objective[`a${i}`] = product.price));

    //create constrains for algorithm
    const constraints = await this.createConstraints(products, needElements);
    // console.log(objective);
    // console.log(constraints);

    // const solver = new SimpleSimplex({
    //   objective,
    //   constraints,
    //   optimizationType: 'max',
    // });

    // // call the solve method with a method name
    // const result = solver.solve({
    //   methodName: 'simplex',
    // });

    // // see the solution and meta data
    // console.log({
    //   solution: result.solution,
    //   isOptimal: result.details.isOptimal,
    // });
    //////////////////////////////////////////////////////////////////////////////////////////////////
    const solver = new SimpleSimplex({
      objective: {
        a: 15,
        b: 5,
      },
      constraints: [
        {
          namedVector: { a: 4, b: 7 },
          constraint: '<=',
          constant: 49,
        },
        {
          namedVector: { a: 8, b: 3 },
          constraint: '<=',
          constant: 51,
        },
        {
          namedVector: { a: 9, b: 5 },
          constraint: '<=',
          constant: 45,
        },
      ],
      optimizationType: 'max',
    });

    // call the solve method with a method name
    const result = solver.solve({
      methodName: 'simplex',
    });

    // see the solution and meta data
    console.log({
      solution: result.solution,
      isOptimal: result.details.isOptimal,
    });
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  calculateNeededElements = async ({ weight, height, age, activity, sex }) => {
    const needCalories =
      sex === 'female'
        ? (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * activity
        : (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) * activity;

    return {
      needFats: (needCalories * 0.3) / 9,
      needProteins: (needCalories * 0.3) / 4,
      needCarbohydrates: (needCalories * 0.4) / 4,
    };
  };

  createConstraints = async (products, needElements) => {
    const fatsVector: any = {};
    const proteinsVector: any = {};
    const carbohydratesVector: any = {};

    products.forEach((product, i) => (fatsVector[`a${i}`] = product.fats));
    products.forEach(
      (product, i) => (proteinsVector[`a${i}`] = product.proteins),
    );
    products.forEach(
      (product, i) => (carbohydratesVector[`a${i}`] = product.carbohydrates),
    );

    return [
      {
        namedVector: fatsVector,
        constraint: '<=',
        constant: needElements.needFats,
      },
      {
        namedVector: proteinsVector,
        constraint: '<=',
        constant: needElements.needProteins,
      },
      {
        namedVector: carbohydratesVector,
        constraint: '<=',
        constant: needElements.needCarbohydrates,
      },
    ];
  };
}
