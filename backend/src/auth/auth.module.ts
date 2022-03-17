import { EmailService } from './../email/email.service';
import { UsersModule } from './../users/users.module';
import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { EmailLinkService } from 'src/email/confirm-email-link.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, EmailService, EmailLinkService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '12h',
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
