import { UsersModule } from './../users/users.module';
import { RecommendationService } from './recommendation.service';
import { ProductsModule } from 'src/products/products.module';
import { Module } from '@nestjs/common';

import { RecommendationController } from './recommendation.controller';

@Module({
  controllers: [RecommendationController],
  providers: [RecommendationService],
  imports: [ProductsModule, UsersModule],
})
export class RecommendationModule {}
