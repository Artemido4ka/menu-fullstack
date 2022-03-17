// import { UserRoles } from './user-roles.entity';
import { Role } from './roles.entity';
import { User } from 'src/users/users.entity';
// import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    TypeOrmModule.forFeature([Role, User]),
    // SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [RolesService],
})
export class RolesModule {}
