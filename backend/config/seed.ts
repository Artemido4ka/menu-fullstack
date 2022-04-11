import * as dotenv from 'dotenv';

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
