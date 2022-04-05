// import { User } from 'src/users/users.entity';
// import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

// @Entity()
// export class Role {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   value: string;

//   @Column()
//   description: string;

//   @ManyToMany(() => User, (user) => user.roles)
//   users: User[];
// }

@ObjectType()
export class Role {
  @Field((type) => Int)
  id: number;

  @Field()
  value: string;

  @Field({ nullable: true })
  description?: string;
}
