import { CreateRoleInput } from './dto/create-role';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Role } from './roles.entity';
import { RolesService } from './roles.service';

@Resolver((of) => Role)
export class RolesResolver {
  constructor(private rolesService: RolesService) {}

  @Query((returns) => Role)
  getOneRole(@Args('id', { type: () => Int }) id: number): Promise<Role> {
    return this.rolesService.getOneRole(id);
  }

  @Query((returns) => [Role])
  getAllRoles(): Promise<Role[]> {
    return this.rolesService.getAllRoles();
  }

  @Mutation((returns) => Role)
  createRole(
    @Args('createRoleInput') createRoleInput: CreateRoleInput,
  ): Promise<Role> {
    return this.rolesService.createRole(createRoleInput);
  }
}
