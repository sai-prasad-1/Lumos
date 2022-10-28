import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CertificateModule } from './certificate/certificate.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [AuthModule, PrismaModule, CertificateModule, EventModule],
})
export class AppModule {}
