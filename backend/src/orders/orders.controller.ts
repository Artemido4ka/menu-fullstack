import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { OrderCreateDto } from './orders-create.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  //TODO
  @UseGuards(JwtAuthGuard)
  @Roles('USER')
  @UseGuards(RolesGuard)
  @Post()
  createOrder(@Body() dto: any, @Request() req: any) {
    return this.ordersService.createOrder(dto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.deleteOrder(id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put(':id')
  updateOrder(@Body() dto: any, @Param('id') id: string) {
    // console.log(dto, 'DTO');
    return this.ordersService.updateOrder(dto, id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get(':id')
  getOneOrder(@Param('id') id: string) {
    return this.ordersService.getOneOrder(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUserOrders(@Request() req: any) {
    return this.ordersService.getUserOrders(req.user.id);
  }
}
