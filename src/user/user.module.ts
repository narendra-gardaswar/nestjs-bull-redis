import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { UserConsumer } from './user.consumer';
import { UserController } from './user.controller';
import { UsersListener } from './user.listner';
import { UserService } from './user.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'user-queue',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserConsumer, UsersListener],
})
export class UserModule {}
