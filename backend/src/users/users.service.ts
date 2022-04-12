import { RolesService } from './../roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private rolesService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    let role;
    if (dto.email === 'admin@mail.com') {
      role = await this.rolesService.getRoleByValue('ADMIN');
    } else {
      role = await this.rolesService.getRoleByValue('USER');
    }

    const user = this.userRepository.create({
      ...dto,
      roles: [role],
    });
    await this.userRepository.save(user);
    return user;
  }

  async addActivationCode(email, activationCode) {
    const user = await this.getUsersByEmail(email);
    user.activationCode = activationCode;
    await this.userRepository.save(user);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.find({
      relations: ['orders'],
    });
    return users;
  }

  async getUser(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      // relations: ['roles'],
    });

    return user;
  }

  async updateUser(dto: any, userId: string) {
    const candidate = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!candidate) {
      throw new NotFoundException('User not found');
    }
    const passwordEquals = await bcrypt.compare(
      dto.password,
      candidate.password,
    );

    // в случаи если пароль несовпадает и новый и он не сатрый, хэшируем заново
    let hashPassword = candidate.password;
    if (!passwordEquals && dto.password !== candidate.password) {
      hashPassword = await bcrypt.hash(dto.password, 5);
    }

    const updatedUser = await this.userRepository.save({
      ...candidate,
      ...dto,
      password: hashPassword,
    });

    // const res = {
    //   id: updatedUser.id,
    //   firstName: updatedUser.firstName,
    //   lastName: updatedUser.lastName,
    //   email: updatedUser.email,
    //   password: updatedUser.password,
    //   avatar: updatedUser.avatar,
    // };
    return updatedUser;
  }

  async getUsersByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
      relations: ['roles'],
    });
    return user;
  }

  async getUserByActivationCode(activationCode: string) {
    const user = await this.userRepository.findOne({
      activationCode: activationCode,
    });
    return user;
  }

  async updateActivationStatus(userId) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    user.isEmailConfirmed = true;
    user.activationCode = null;
    await this.userRepository.save(user);
  }
}
