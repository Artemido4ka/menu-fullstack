import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly fats: number;

  @IsNumber()
  readonly proteins: number;

  @IsNumber()
  readonly carbohydrates: number;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly weight: number;

  @IsString()
  readonly image: string;
}
