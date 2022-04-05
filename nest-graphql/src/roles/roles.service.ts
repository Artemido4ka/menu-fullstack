import { Role } from './../../../backend/src/roles/roles.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {
  //   async getRoleByValue(value: string) {
  //     const role = await this.roleRepository.findOne({ value: value });
  //     return role;
  //   }
  async getAllRoles(): Promise<Role[]> {
    const role = new Role();
    role.id = 1;
    role.value = 'ADMIN';

    return [role];
  }
}
