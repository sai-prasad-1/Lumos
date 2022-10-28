import { Controller, Post, Body } from '@nestjs/common'
import { CertificateService } from './certificate.service';


@Controller()
export class certificateController{

    constructor(private certificateService: CertificateService) {}

}