import { RolesService } from './../roles/roles.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/roles.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private rolesService: RolesService,
  ) {}

  create(createUserInput: CreateUserInput) {
    const newUser = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneOrFail(id);
  }

  getRole(roleId: number): Promise<Role> {
    return this.rolesService.getOneRole(roleId);
  }
}
