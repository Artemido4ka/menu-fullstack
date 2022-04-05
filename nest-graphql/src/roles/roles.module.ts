import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { Role } from './roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RolesService, RolesResolver],
})
export class RolesModule {}
