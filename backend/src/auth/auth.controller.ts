import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service';
import { createAuthDto } from './dto';


@Controller()
export class AuthController{

    constructor(private authService: AuthService) {}


    @Post("signup")
    async signup(@Body() dto: createAuthDto) {
  
      return await this.authService.signup(dto);
    
    }
}