import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { UserConsumer } from './user.consumer';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'user-queue',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserConsumer],
})
export class UserModule {}
