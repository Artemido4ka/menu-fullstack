import { Product } from './products.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async createProduct(dto: any) {
    const product = await this.productRepository.create(dto);
    await this.productRepository.save(product);
    return product;
  }

  async deleteProduct(id: string) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return this.productRepository.delete(id);
  }

  async updateProduct(dto: any, id: string) {
    // const fileName = await this.filesService.createFile(image);
    const oldProduct = await this.productRepository.findOne(id);
    if (!oldProduct) {
      throw new NotFoundException('Product not found');
    }
    return this.productRepository.save({
      ...oldProduct, // existing fields
      ...dto, // updated fields
    });
  }

  async getAllProducts() {
    const products = await this.productRepository.find();
    if (!products) {
      throw new NotFoundException('products not found');
    }
    return products;
  }

  async getOneProduct(id: string) {
    const product = await this.productRepository.findOne(id);
    return product;
  }

  async findProductsByIds(arrayOfIds: any) {
    const products = await this.productRepository.findByIds(arrayOfIds);
    return products;
  }
}
