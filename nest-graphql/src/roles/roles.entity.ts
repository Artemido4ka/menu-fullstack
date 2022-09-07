import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@Entity()
@ObjectType()
export class Role {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  value: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @OneToMany(() => User, (user) => user.role)
  @Field((type) => [User], { nullable: true })
  users?: User[];
}
