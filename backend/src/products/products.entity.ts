import { DecimalTransformer } from './../transformers/decimal.transformer';
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

  @Column({ type: 'decimal', transformer: new DecimalTransformer() })
  fats: number;

  @Column({ type: 'decimal', transformer: new DecimalTransformer() })
  proteins: number;

  @Column({ type: 'decimal', transformer: new DecimalTransformer() })
  carbohydrates: number;

  @Column({ type: 'decimal', transformer: new DecimalTransformer() })
  price: number;

  @Column({ type: 'decimal', transformer: new DecimalTransformer() })
  weight: number;

  @Column()
  image: string;

  @ManyToMany(() => Order, (order) => order.products)
  @JoinTable()
  orders: Order[];
}
