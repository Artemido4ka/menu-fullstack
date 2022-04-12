import { Message } from './../messages/entities/message.entity';
import { Order } from './../orders/orders.entity';
import { Role } from './../roles/roles.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: false })
  isEmailConfirmed: boolean;

  @Column({ default: null })
  activationCode: string;

  @Column({ default: null })
  avatar: string;

  @Column({ default: 0 })
  weight: number;

  @Column({ default: 0 })
  height: number;

  @Column({ default: 0 })
  age: number;

  @Column({ type: 'decimal', default: 0 })
  activity: number;

  @Column({ default: null })
  sex: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];
}
