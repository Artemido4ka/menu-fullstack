import { RecommendationService } from './recommendation.service';
import {
  Body,
  Controller,
  Get,
  Request,
  UseGuards,
  Post,
} from '@nestjs/common';

// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('recommendation')
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  getUser(@Request() req: any, @Body() recommendationDto: any) {
    return this.recommendationService.getRecommendation(recommendationDto);
  }
  // addRole(@Body() dto: AddRoleDto) {
  //   return this.usersService.addRole(dto);
  // }
}
