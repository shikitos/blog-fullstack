import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthDto {
	@IsEmail()
	email: string;

	@MinLength(6, { message: 'Password should contain at least 6 symbols' })
	@IsString()
	password: string;
}
