import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Auth, Student, College} from '@prisma/client'
import { ethers } from 'ethers'
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { createCollegeAuthDto, createStudentAuthDto } from './dto';
import { identity } from 'rxjs';

@Injectable()
export class AuthService {

    constructor( private prisma: PrismaService ) {}

    async _createStudent(dto: createStudentAuthDto) {
        const wallet = await ethers.Wallet.createRandom()
        const user = await this.prisma.student.create({
            data: {
                email: dto.email,
                address: wallet.address,
                firstName: dto.firstName,
                lastName: dto.lastName,
                collegeName: dto.collegeName,
                Designation: dto.designation,
                githubUsername: ""
            }
        })

        return user;
    }

    async _createCollege(dto: createCollegeAuthDto) {
        const college = await this.prisma.college.create({
            data: {
                id: dto.id,
                email: dto.email,
                collegeName: dto.collegeName,
                country: dto.country,
                streetAddress: dto.streetAddress
            }
        })
        return college
    }

    async signup(dto: createStudentAuthDto) {

        const pHash = await argon.hash(dto.password)

        const auth = await this.prisma.auth.create({
            data: {
                email: dto.email,
                username: dto.username,
                passwordHash: pHash,
                userType: dto.userType
            }
        })

        return auth;

    }

    async signin(dto: any) {
        const auth = await this.prisma.auth.findFirst({
            where: {
                email: dto.email
            }
        })

        const result = await argon.verify(auth.passwordHash, dto.password);
        if(result){
            return {
                result: result,
                user: auth.email
            };
        }
        return new HttpException("Invalid username or password", 500);
    }

    async getStudents() {
        return await this.prisma.auth.findMany();
    }

}
