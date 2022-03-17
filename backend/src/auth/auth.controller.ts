import { ResendEmailDto } from './../email/dto/email-resend.dto';
import { EmailService } from './../email/email.service';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private emailService: EmailService,
  ) {}
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    console.log(userDto);
    return this.authService.registration(userDto);
  }

  @Post('/resend')
  resendEmail(@Body() resendEmailDto: ResendEmailDto) {
    return this.emailService.sendEmail(resendEmailDto.email);
  }

  @Get('/confirm/:id')
  confirmEmail(@Param('id') id: string) {
    return this.emailService.confirmEmail(id);
  }
}
