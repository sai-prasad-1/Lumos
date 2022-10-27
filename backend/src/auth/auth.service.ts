import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { createAuthDto } from './dto';

@Injectable()
export class AuthService {

    constructor( private prisma: PrismaService ) {}


    async signup(dto: createAuthDto) {

        const pHash = await argon.hash(dto.password)

        const auth = await this.prisma.auth.create({
            data: {
                email: dto.email,
                username: dto.username,
                passwordHash: pHash,
            }
        })

        return auth
    }

}
