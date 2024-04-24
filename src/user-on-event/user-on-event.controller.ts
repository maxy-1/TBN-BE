// user-on-event.controller.ts

import { Controller, Post, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { UserOnEventService } from './user-on-event.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { HasRoles } from 'src/auth/decorator/has-roles.decorator';

@Controller('user-on-event')
export class UserOnEventController {
  constructor(private readonly userOnEventService: UserOnEventService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':userId/:eventId')
  async addUserToEvent(
    @Param('userId') userId: string,
    @Param('eventId') eventId: string,
  ): Promise<void> {
    await this.userOnEventService.addUserToEvent(userId, eventId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userId/:eventId')
  async removeUserFromEvent(
    @Param('userId') userId: string,
    @Param('eventId') eventId: string,
  ): Promise<void> {
    await this.userOnEventService.removeUserFromEvent(userId, eventId);
  }

  @HasRoles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('event/:eventId')
  async getUsersByEventId(@Param('eventId') eventId: string): Promise<any> {
    return this.userOnEventService.getUsersByEventId(eventId);
  }
}
