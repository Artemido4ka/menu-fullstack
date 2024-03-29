import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

dotenv.config();

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
