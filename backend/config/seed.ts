import * as dotenv from 'dotenv';

import { Message } from '../src/messages/entities/message.entity';
import { Image } from '../src/images/images.entity';
import { Order } from '../src/orders/orders.entity';
import { Product } from '../src/products/products.entity';
import { Role } from '../src/roles/roles.entity';
import { User } from '../src/users/users.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

const seedConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/src/**/*.entity{.js,.ts}'],
  synchronize: false,
  migrations: ['dist/src/db/seeders/*.js'],
  cli: {
    migrationsDir: 'src/db/seeders',
  },
};

export default seedConfig;