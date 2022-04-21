import { EmailService } from './../email/email.service';
import { UsersService } from './../users/users.service';
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private emailService: EmailService,
  ) {}
  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    const token = await this.generateToken(user);
    return { user, token };
  }

  async loginAdmin(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    if (user.roles[0].value !== 'ADMIN')
      throw new UnauthorizedException({ message: 'Ошибка авторизации' });
    const token = await this.generateToken(user);
    return { user, token };
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUsersByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким Email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);

    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    // this.emailService.sendEmail(userDto.email); email sending
    const token = await this.generateToken(user);
    return { user, token };
  }

  async generateToken(user) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return await this.jwtService.sign(payload);
  }

  async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUsersByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    } else {
      throw new UnauthorizedException({ message: 'Некорректные данные' });
    }
  }
}
