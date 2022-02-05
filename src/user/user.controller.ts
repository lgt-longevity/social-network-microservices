import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  login(): void {
    return this.userService.getProfile();
  }

  @Put('profile')
  logout(): void {
    return this.userService.updateProfile();
  }
}
