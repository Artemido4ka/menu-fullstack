import { RecommendationService } from './recommendation.service';
import { Controller, Get, Request, UseGuards, Param } from '@nestjs/common';

// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('recommendation')
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) {}

  // @UseGuards(JwtAuthGuard)

  @Get('/:id')
  getUser(@Param('id') userId: string) {
    return this.recommendationService.getRecommendation(userId);
  }
}
