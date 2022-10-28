import { Module } from '@nestjs/common';
import { CertificateService } from './certificate.service';

@Module({
  providers: [CertificateService]
})
export class CertificateModule {}
