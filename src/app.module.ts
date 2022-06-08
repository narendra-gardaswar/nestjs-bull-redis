import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'usw',
        port: 33210,
        password: 'c65',
      },
    }),
    UserModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
