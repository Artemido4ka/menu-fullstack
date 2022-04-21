import { ValueTransformer } from 'typeorm';

export class DecimalTransformer implements ValueTransformer {
  to(decimal?: number): number {
    return decimal;
  }

  from(decimal?: string): number {
    return parseFloat(decimal);
  }
}
