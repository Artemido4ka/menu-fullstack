import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private rolesRepository: Repository<Role>,
  ) {}
  //   async getRoleByValue(value: string) {
  //     const role = await this.roleRepository.findOne({ value: value });
  //     return role;
  //   }
  async getAllRoles(): Promise<Role[]> {
    return this.rolesRepository.find();
  }
}
