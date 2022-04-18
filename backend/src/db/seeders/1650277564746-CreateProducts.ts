import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

// import image from './images/image.png';
// import image from './images';

import { Image } from 'src/images/images.entity';

export class CreateProducts1650277564746 implements MigrationInterface {
  name = 'CreateProducts1650277564746';

  public async up(): Promise<void> {
    const imageRepository = getRepository(Image);
  }
  public async down(): Promise<void> {
    console.log('fgre');
  }
}
