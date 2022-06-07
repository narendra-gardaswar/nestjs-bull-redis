import { Controller, Get, Post } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  userList() {
    this.userService.listUser('test');
    return { response: 'success' };
  }
}
