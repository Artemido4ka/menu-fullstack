import { ImagesController } from './images.controller';
import { FilesModule } from './../files/files.module';

import { AuthModule } from './../auth/auth.module';

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './images.entity';
import { ImagesService } from './images.service';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [TypeOrmModule.forFeature([Image]), FilesModule, AuthModule],
})
export class ImagesModule {}
