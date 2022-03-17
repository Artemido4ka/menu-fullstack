import { EmailLinkService } from './confirm-email-link.service';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EmailService {
  constructor(
    private userService: UsersService,
    private emailLinkService: EmailLinkService,
  ) {}

  async sendEmail(email: string): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const link = await this.emailLinkService.createLink(email);

      const info = await transporter.sendMail({
        from: '"ITapp 👻" <foo@example.com>',
        to: email,
        subject: 'Confirmation',
        text: '',
        html: `<b>Please confirm your registration by clicking on the link</b> <a href="${link}">confirm Email</a>`, // html body
      });
      console.log('Message sent: %s', info.messageId);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async confirmEmail(id: string) {
    const user = await this.userService.getUserByActivationCode(id);
    if (!user) {
      throw new NotFoundException();
    }
    const res = await this.userService.updateActivationStatus(user.id);
    return res;
  }
}
