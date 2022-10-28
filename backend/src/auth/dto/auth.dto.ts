import { IsEmail, IsNotEmpty } from 'class-validator';


export class createStudentAuthDto {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;

    firstName: string;
    lastName: string;
    collegeName: string;
    designation: string;
    country: string;
    streetAddress: string;

    website: string;
    about: string;
    photoLink: string;

    userType: string;
}

export class createCollegeAuthDto {
    id: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
    collegeName: string;
    country: string;
    streetAddress: string;
}