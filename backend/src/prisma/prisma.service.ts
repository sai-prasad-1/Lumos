import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{

    constructor() {
        super({
            datasources: {
                db: {
                    url: "postgresql://postgres:toor@localhost:5432/lumos?schema=public"
                }
            }
        })
    }

}
