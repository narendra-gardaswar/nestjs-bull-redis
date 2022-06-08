import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UserService {
  constructor(@InjectQueue('user-queue') private userQueue: Queue) {}

  getUserDetails(id: string) {
    //assume userData is comming from database
    const userData = {
      _id: '1',
      name: 'vikas',
      address: 'nanded',
      age: 23,
    };

    if (id === userData._id) {
      this.userQueue.add(
        'userDetails-job',
        {
          userData: userData,
        },
        {
          delay: 5000,
        },
      );
      return userData;
    } else {
      return 'user not found';
    }
  }
}
