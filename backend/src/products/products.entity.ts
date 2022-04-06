import { Order } from 'src/orders/orders.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  fats: number;

  @Column()
  proteins: number;

  @Column()
  carbohydrates: number;

  @Column()
  price: number;

  @Column()
  weight: number;

  @Column()
  image: string;

  @ManyToMany(() => Order, (order) => order.products)
  @JoinTable()
  orders: Order[];
}
