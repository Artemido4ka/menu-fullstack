import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';

import { Roles } from 'src/auth/roles-auth.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from './../auth/roles.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getUser(@Request() req: any) {
    return this.usersService.getUser(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateUser(@Request() req: any, @Body() dto: any) {
    return this.usersService.updateUser(dto, req.user.id);
  }

  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  // @Post('/role')
  // addRole(@Body() dto: AddRoleDto) {
  //   return this.usersService.addRole(dto);
  // }
}
