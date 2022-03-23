import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Order } from './orders.entity';
import { AuthModule } from 'src/auth/auth.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [
    TypeOrmModule.forFeature([User, Order]),
    AuthModule,
    ProductsModule,
  ],
})
export class OrdersModule {}
