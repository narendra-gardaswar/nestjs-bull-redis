import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { UserService } from './user.service';
import { EventEmitter2 } from 'eventemitter2';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Post('/:id')
  async getUserDetails(@Param('id') id: string, @Body() body: any) {
    console.log(body, 'from controller');
    const user = await this.userService.getUserDetails(id);
    return { response: user };
  }
}
