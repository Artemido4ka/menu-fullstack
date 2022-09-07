import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Role } from 'src/roles/roles.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User])
  findAllUsers() {
    return this.usersService.findAll();
  }

  @ResolveField((returns) => Role)
  getRole(@Parent() user: User): Promise<Role> {
    return this.usersService.getRole(user.roleId);
  }

  @Query(() => User)
  findOneUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }
}
