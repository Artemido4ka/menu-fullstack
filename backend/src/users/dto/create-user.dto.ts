import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  readonly firstName: string;

  readonly lastName: string;

  @IsEmail()
  readonly email: string;
  @MinLength(4, {
    message: 'Минимальная длина пароля 4 символа !',
  })
  readonly password: string;

  readonly activationCode: string;
}
