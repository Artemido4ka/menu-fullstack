import { UsersModule } from './../users/users.module';
import { AuthModule } from './../auth/auth.module';
import { Message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './../users/users.entity';
import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';

@Module({
  providers: [MessagesGateway, MessagesService],
  imports: [TypeOrmModule.forFeature([Message, User]), AuthModule, UsersModule],
})
export class MessagesModule {}
