import { RolesService } from './../roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
