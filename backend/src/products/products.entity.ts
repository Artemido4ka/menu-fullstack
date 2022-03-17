import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
