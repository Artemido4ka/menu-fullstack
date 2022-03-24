import { ProductsController } from './products.controller';
import { AuthModule } from './../auth/auth.module';

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product]), AuthModule],
  exports: [ProductsService],
})
export class ProductsModule {}
