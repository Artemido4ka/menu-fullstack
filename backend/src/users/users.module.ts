import { Order } from './../orders/orders.entity';
import { AuthModule } from './../auth/auth.module';
import { RolesModule } from './../roles/roles.module';
import { Role } from '../roles/roles.entity';
import { User } from './users.entity';
import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Role, Order]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
