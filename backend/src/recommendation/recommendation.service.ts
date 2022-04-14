import { UsersService } from './../users/users.service';
import { ProductsService } from './../products/products.service';
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const solver = require('javascript-lp-solver');

import {
  CARBOHYDRATES_CONST_NORM,
  FATS_CONST_NORM,
  FEM_K1,
  FEM_K2,
  FEM_K3,
  FEM_K4,
  MAN_K1,
  MAN_K2,
  MAN_K3,
  MAN_K4,
  PROTEINS_CONST_NORM,
} from './constants';

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
    console.log(variables);

    const model = {
      optimize: 'price',
      opType: 'min',
      constraints,
      variables,
    };

    const results = solver.Solve(model);
    console.log(results);

    // const res = Object.entries(results)
    //   .map((item) => {
    //     if (item[0].includes('x')) return item;
    //   })
    //   .filter(Boolean);
    // console.log(res);

    const keys = Object.keys(results)
      .map((item) => {
        if (item[0].includes('x')) return item.replace('x', '');
      })
      .filter(Boolean);

    console.log(keys);
  }

  calculateNeededElements = async ({ weight, height, age, activity, sex }) => {
    const needCalories =
      sex === 'female'
        ? (FEM_K1 + FEM_K2 * weight + FEM_K3 * height - FEM_K4 * age) * activity
        : (MAN_K1 + MAN_K2 * weight + MAN_K3 * height - MAN_K4 * age) *
          activity;

    return {
      fats: { min: Math.round(needCalories * FATS_CONST_NORM) },
      proteins: { min: Math.round(needCalories * PROTEINS_CONST_NORM) },
      carbohydrates: {
        min: Math.round(needCalories * CARBOHYDRATES_CONST_NORM),
      },
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
