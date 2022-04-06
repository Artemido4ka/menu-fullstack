import { ProductResponseDto } from './dto/product-response.dto';
import { Product } from './products.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  //CREATE PRODUCT
  async createProduct(
    createProductDto: ProductDto,
  ): Promise<ProductResponseDto> {
    const product = await this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  //DELETE PRODUCT
  async deleteProduct(id: string) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return this.productRepository.delete(id);
  }

  //UPDATE PRODUCT
  async updateProduct(
    updateProductDto: ProductDto,
    id: string,
  ): Promise<ProductResponseDto> {
    const oldProduct = await this.productRepository.findOne(id);
    if (!oldProduct) {
      throw new NotFoundException('Product not found');
    }
    return await this.productRepository.save({
      ...oldProduct, // existing fields
      ...updateProductDto, // updated fields
    });
  }

  //GET ALL PRODUCTS
  async getAllProducts(): Promise<ProductResponseDto[]> {
    const products = await this.productRepository.find();
    if (!products) {
      throw new NotFoundException('products not found');
    }
    return products;
  }

  //GET ONE PRODUCT
  async getOneProduct(id: string): Promise<ProductResponseDto> {
    const product = await this.productRepository.findOne(id);
    return product;
  }

  //GET PRODUCTS BY GIVVEN ID's
  async findProductsByIds(arrayOfIds: any): Promise<ProductResponseDto[]> {
    const products = await this.productRepository.findByIds(arrayOfIds);
    return products;
  }
}
