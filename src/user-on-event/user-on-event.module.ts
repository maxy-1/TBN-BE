import { Module } from '@nestjs/common';
import { UserOnEventService } from './user-on-event.service';
import { UserOnEventController } from './user-on-event.controller';

@Module({
  providers: [UserOnEventService],
  controllers: [UserOnEventController]
})
export class UserOnEventModule {}
