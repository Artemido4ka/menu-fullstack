import { CreateRoleInput } from './dto/create-role';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private rolesRepository: Repository<Role>,
  ) {}

  async getAllRoles(): Promise<Role[]> {
    return this.rolesRepository.find();
  }

  async createRole(createRoleInput: CreateRoleInput): Promise<Role> {
    const newRole = this.rolesRepository.create(createRoleInput);
    return this.rolesRepository.save(newRole);
  }

  async getOneRole(id: number): Promise<Role> {
    return this.rolesRepository.findOneOrFail(id);
  }
}
