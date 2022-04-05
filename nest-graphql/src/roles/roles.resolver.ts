import { Resolver, Query } from '@nestjs/graphql';
import { Role } from './roles.entity';
import { RolesService } from './roles.service';

@Resolver((of) => Role)
export class RolesResolver {
  constructor(private rolesService: RolesService) {}

  @Query((returns) => [Role])
  roles(): Promise<Role[]> {
    return this.rolesService.getAllRoles();
  }
}
