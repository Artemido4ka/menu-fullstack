import { Order } from './orders.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderCreateDto } from './orders-create.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  async createOrder(dto: OrderCreateDto, userId: any) {
    const newOrder = { ...dto, userId, date: new Date().toISOString() };
    const order = this.orderRepository.save(newOrder);
    return order;
  }

  async deleteOrder(id: string) {
    const order = await this.orderRepository.findOne(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return this.orderRepository.delete(id);
  }

  async updateOrder(dto: any, id: string) {
    const oldFields = await this.orderRepository.findOne(id);
    if (!oldFields) {
      throw new NotFoundException('Order not found');
    }
    return this.orderRepository.save({
      ...oldFields, // existing fields
      ...dto, // updated fields
    });
  }

  async getAllOrders() {
    const orders = await this.orderRepository.find();
    if (!orders) {
      throw new NotFoundException('orders not found');
    }
    return orders;
  }

  async getUserOrders(userId) {
    const orders = await this.orderRepository.find({ where: { userId } });
    console.log(orders, 'ODRERS');
    if (!orders) {
      throw new NotFoundException('orders of user not found');
    }
    return orders;
  }
}
