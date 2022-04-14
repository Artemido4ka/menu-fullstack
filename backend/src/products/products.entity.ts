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

  @Column({ type: 'decimal' })
  fats: number;

  @Column({ type: 'decimal' })
  proteins: number;

  @Column({ type: 'decimal' })
  carbohydrates: number;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'decimal' })
  weight: number;

  @Column()
  image: string;

  @ManyToMany(() => Order, (order) => order.products)
  @JoinTable()
  orders: Order[];
}
