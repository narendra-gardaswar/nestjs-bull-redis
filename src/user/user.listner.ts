import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { userEvents } from '../utils/events';

@Injectable()
export class UsersListener {
  @OnEvent(userEvents.GET_USER_DETAILS, { async: true })
  getUserDetails(payload: any) {
    console.log(payload, 'from event');
  }
}
