import { ProductDto } from './product.dto';
import { IsNumber } from 'class-validator';

export class ProductResponseDto extends ProductDto {
  @IsNumber()
  readonly id: number;
}
