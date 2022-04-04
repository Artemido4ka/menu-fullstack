import { User } from './../../users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  socketId: string;

  @Column()
  name: string;

  @Column()
  text: string;

  @Column()
  date: Date;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
