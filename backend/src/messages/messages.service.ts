import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
    private usersService: UsersService,
  ) {}

  async create(createMessageDto: any, socketId: string) {
    const user = await this.usersService.getUser(createMessageDto.userId);

    const newMessage = {
      name: user.firstName + ' ' + user.lastName,
      userId: user.id,
      text: createMessageDto.messageText,
      socketId,
      date: new Date().toISOString(),
    };
    return await this.messageRepository.save(newMessage);
  }

  async findAll() {
    const messages = await this.messageRepository.find({});
    return messages;
  }
}
