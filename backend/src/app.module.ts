import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { FilesModule } from './files/files.module';
import { ImagesModule } from './images/images.module';
import { MessagesModule } from './messages/messages.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import config from 'config/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TypeOrmModule.forRoot(config),
    RecommendationModule,
    UsersModule,
    RolesModule,
    AuthModule,
    ProductsModule,
    OrdersModule,
    FilesModule,
    ImagesModule,
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
