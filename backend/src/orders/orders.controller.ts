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
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  //TODO
  @Roles('USER')
  @UseGuards(RolesGuard)
  @Post()
  createOrder(@Body() dto: any, @Request() req: any) {
    return this.ordersService.createOrder(dto, req.user.id);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.deleteOrder(id);
  }

  @Roles('USER')
  @UseGuards(RolesGuard)
  @Get('cancel/:orderId')
  cancelOrder(@Param('orderId') orderId: string) {
    return this.ordersService.cancelOrder(orderId);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put(':id')
  updateOrder(@Body() dto: any, @Param('id') id: string) {
    return this.ordersService.updateOrder(dto, id);
  }

  @Get('/user')
  getUserOrders(@Request() req: any) {
    return this.ordersService.getUserOrders(req.user.id);
  }

  @Roles('USER')
  @Get('/user/:id')
  getOneUserOrder(@Request() req: any, @Param('id') orderId: string) {
    return this.ordersService.getOneUserOrder(req.user.id, orderId);
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get(':id')
  getOneOrder(@Param('id') id: string) {
    return this.ordersService.getOneOrder(id);
  }
}
