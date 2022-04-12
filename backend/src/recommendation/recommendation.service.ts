import { UsersService } from './../users/users.service';
import { ProductsService } from './../products/products.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecommendationService {
  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
  ) {}

  async getRecommendation(userId: any) {
    const user = await this.usersService.getUser(userId);
    console.log(user);

    const products = await this.productsService.getAllProducts();
    console.log(products);
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
