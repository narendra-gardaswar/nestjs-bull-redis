import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('user-queue')
export class UserConsumer {
  @Process('listUser-job')
  readListUserJob(job: Job<unknown>) {
    console.log(job.data);
  }
}
