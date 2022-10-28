import { Controller, Post, Body, Get } from '@nestjs/common'
import { AuthService } from './auth.service';
import { createCollegeAuthDto, createStudentAuthDto } from './dto';


@Controller()
export class AuthController{

    constructor(private authService: AuthService) {}


    @Post("signup")
    async signup(@Body() dto: any) {

      const auth = await this.authService.signup(dto);

      if(dto.userType == "Student")
      {
          const user = await this.authService._createStudent(dto);
          return {auth: auth, user: user}
      }

      if(dto.userType == "College")
      {
          const college = await this.authService._createCollege(dto);
          return {auth: auth, college: college}
      }
      
    }

    @Post("signin")
    async signin(@Body() dto: any) {
      return await this.authService.signin(dto)
    }

    @Get("users")
    async getUsers() {
      return await this.authService.getStudents();
    }
  }