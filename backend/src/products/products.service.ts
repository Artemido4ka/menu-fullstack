import { FilesService } from './../files/files.service';
import { Product } from './products.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private filesService: FilesService,
  ) {}

  async createProduct(dto: any, image: any) {
    const fileName = await this.filesService.createFile(image);
    const product = await this.productRepository.create({
      ...dto,
      image: fileName,
    });
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

  async updateProduct(dto: any, id: string, image: any) {
    const fileName = await this.filesService.createFile(image);
    const oldFields = await this.productRepository.findOne(id);
    if (!oldFields) {
      throw new NotFoundException('Product not found');
    }
    return this.productRepository.save({
      ...oldFields, // existing fields
      ...dto, // updated fields
      image: fileName,
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
