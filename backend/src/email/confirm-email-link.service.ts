import { UsersService } from './../users/users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class EmailLinkService {
  constructor(private readonly usersService: UsersService) {}

  async createLink(email: string) {
    try {
      const activationCode = v4();
      // const user = await this.usersService.getUsersByEmail(email);
      await this.usersService.addActivationCode(email, activationCode);
      // user.activationCode = code;
      // await this.usersService.save(user);

      // await redis.set(id, userId, 'ex', 60 * 60 * 15);
      return `${process.env.BACKEND_HOST}/auth/confirm/${activationCode}`;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
