import { Order } from './orders/orders.entity';
import { Role } from './roles/roles.entity';
import { User } from './users/users.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/products.entity';
import { OrdersModule } from './orders/orders.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { ImagesModule } from './images/images.module';
import { Image } from './images/images.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Role, Product, Order, Image],
      synchronize: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    ProductsModule,
    OrdersModule,
    FilesModule,
    ImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
