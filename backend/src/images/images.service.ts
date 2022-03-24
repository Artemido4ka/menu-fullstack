import { FilesService } from './../files/files.service';

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './images.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private imageRepository: Repository<Image>,
    private filesService: FilesService,
  ) {}

  async createImage(image: any) {
    const fileName = await this.filesService.createFile(image);
    const newImage = await this.imageRepository.create({
      title: 'new',
      image: fileName,
    });
    return await this.imageRepository.save(newImage);
  }
}
