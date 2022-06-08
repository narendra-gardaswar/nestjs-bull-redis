import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { EventEmitter2 } from 'eventemitter2';
import { userEvents } from '../utils/events';
@Processor('user-queue')
export class UserConsumer {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Process('userDetails-job')
  getUserDetails(job: Job<unknown>) {
    console.log(job.data, 'from consumer');
    const userData: any = job.data;
    this.eventEmitter.emitAsync(userEvents.GET_USER_DETAILS, userData);
  }
}
