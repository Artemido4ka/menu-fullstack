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
    // const user = await this.usersService.getUser(userId);
    // console.log(user);

    // const products = await this.productsService.getAllProducts();
    // console.log(products);

    const solver = new SimpleSimplex({
      objective: {
        a: 20,
        b: 24,
        c: 28,
        a1: 26,
      },
      constraints: [
        {
          namedVector: { a: 2, b: 1, c: 3, a1: 4 },
          constraint: '<=',
          constant: 2660,
        },
        {
          namedVector: { a: 1, b: 3, c: 4, a1: 2 },
          constraint: '<=',
          constant: 2000,
        },
        {
          namedVector: { a: 3, b: 2, c: 1, a1: 4 },
          constraint: '<=',
          constant: 3030,
        },
        {
          namedVector: { a: 1, b: 3, c: 4, a1: 2 },
          constraint: '<=',
          constant: 3730,
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

  // async getUser(userId: string) {
  //   const user = await this.userRepository.findOne({
  //     where: { id: userId },
  //     // relations: ['roles'],
  //   });
  //   const res = {
  //     id: user.id,
  //     firstName: user.firstName,
  //     lastName: user.lastName,
  //     email: user.email,
  //     password: user.password,
  //     avatar: user.avatar,
  //   };
  //   return res;
  // }
}
