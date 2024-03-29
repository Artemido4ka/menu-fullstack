import { ProductsService } from './../products/products.service';
import { Order } from './orders.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderCreateDto } from './orders-create.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    private productsService: ProductsService,
  ) {}

  async createOrder(dto: any, userId: any) {
    const findProducts = await this.productsService.findProductsByIds(
      dto.products,
    );
    const newOrder = {
      ...dto,
      userId,
      products: findProducts,
      date: new Date().toISOString(),
      status: 'ORDERED',
    };
    const order = await this.orderRepository.save(newOrder);
    return order;
  }

  async deleteOrder(id: string) {
    const order = await this.orderRepository.findOne(id, {
      relations: ['products'],
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }
    //unbind order from products /many-to-many problem
    order.products = null;
    await this.orderRepository.save(order);
    await this.orderRepository.delete(id);
    return await this.getAllOrders();
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

  async cancelOrder(orderId: string) {
    const oldOrder = await this.getOneOrder(orderId);
    const canceledOrder = { ...oldOrder, status: 'CANCELED' };
    await this.orderRepository.save(canceledOrder);
    return { order: canceledOrder, orders: await this.getAllOrders() };
    // await
  }

  async getAllOrders() {
    const orders = await this.orderRepository.find({
      relations: ['user', 'products'],
    });
    if (!orders) {
      throw new NotFoundException('orders not found');
    }
    return orders;
  }

  async getOneOrder(id: string) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['products'],
    });
    return order;
  }

  async getUserOrders(userId) {
    const orders = await this.orderRepository.find({
      where: { userId },
      relations: ['products'],
    });

    if (!orders) {
      throw new NotFoundException('orders of user not found');
    }
    return orders;
  }

  async getOneUserOrder(userId, orderId) {
    const order = await this.orderRepository.findOne({
      where: { id: orderId },
      relations: ['products', 'user'],
    });
    if (!order) {
      throw new NotFoundException('orders of user not found');
    }
    if (order.user.id !== userId) {
      throw new NotFoundException('user not found');
    }

    return order;
  }
}
