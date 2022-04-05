import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateRoleInput {
  @IsAlpha()
  @Field()
  value: string;

  @Field({ nullable: true })
  description?: string;
}
