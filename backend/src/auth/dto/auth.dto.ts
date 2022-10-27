import { IsEmail, IsNotEmpty } from 'class-validator';

export class createAuthDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
}