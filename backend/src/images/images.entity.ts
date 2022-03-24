import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;
}
