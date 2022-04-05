import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Role {
  @Field((type) => Int)
  id: number;

  @Field()
  value: string;

  @Field({ nullable: true })
  description?: string;
}
