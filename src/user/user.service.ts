import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UserService {
  constructor(@InjectQueue('user-queue') private userQueue: Queue) {}

  listUser(user: string) {
    this.userQueue.add(
      'listUser-job',
      {
        userData: user,
      },
      {
        delay: 5000,
      },
    );
  }
}
