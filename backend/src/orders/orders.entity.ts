import { Product } from './../products/products.entity';
import { User } from './../users/users.entity';

import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'real' })
  price: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  status: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToMany(() => Product, (product) => product.orders)
  products: Product[];
}
