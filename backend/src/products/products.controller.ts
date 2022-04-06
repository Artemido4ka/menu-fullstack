import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ProductDto } from './dto/product.dto';
import { ProductResponseDto } from './dto/product-response.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //CREATE PRODUCT
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  async createProduct(
    @Body() createProductDto: ProductDto,
  ): Promise<ProductResponseDto> {
    return this.productsService.createProduct(createProductDto);
  }

  //DELETE PRODUCT
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }

  //UPDATE PRODUCT
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put(':id')
  async updateProduct(
    @Body() updateProductDto: ProductDto,
    @Param('id') id: string,
  ): Promise<ProductResponseDto> {
    return this.productsService.updateProduct(updateProductDto, id);
  }

  //GET ALL PRODUCTS
  @Get()
  async getAllProducts(): Promise<ProductResponseDto[]> {
    return this.productsService.getAllProducts();
  }

  //GET ONE PRODUCT
  @Get(':id')
  async getOneProduct(@Param('id') id: string): Promise<ProductResponseDto> {
    return this.productsService.getOneProduct(id);
  }
}
