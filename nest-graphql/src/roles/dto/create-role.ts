import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoleInput {
  @Field()
  value: string;

  @Field({ nullable: true })
  description?: string;
}
