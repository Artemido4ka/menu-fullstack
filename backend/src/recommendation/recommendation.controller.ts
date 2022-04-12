import { RecommendationService } from './recommendation.service';
import { Controller, Get, Request, UseGuards, Param } from '@nestjs/common';

// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('recommendation')
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) {}

  // @UseGuards(JwtAuthGuard)
  // @Post()
  // getUser(@Request() req: any, @Body() recommendationDto: any) {
  //   return this.recommendationService.getRecommendation(recommendationDto);
  // }

  @Get('/:id')
  getUser(@Param('id') userId: string) {
    return this.recommendationService.getRecommendation(userId);
  }
}
