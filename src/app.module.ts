import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { UserOnEventModule } from './user-on-event/user-on-event.module';

@Module({
  imports: [AuthModule, UsersModule, EventsModule, UserOnEventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
