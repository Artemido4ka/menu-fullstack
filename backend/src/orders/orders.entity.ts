import { Product } from './../products/products.entity';
import { User } from './../users/users.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
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

  // @OneToMany(() => Product, (product) => product.order, { cascade: true })
  // products: Product[];

  @ManyToMany(() => Product, (product) => product.orders)
  @JoinTable()
  products: Product[];
}
