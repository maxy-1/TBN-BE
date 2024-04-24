import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from '@prisma/client';
import { EventDto } from './dto/event.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { HasRoles } from 'src/auth/decorator/has-roles.decorator';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getAllEvents(): Promise<Event[]> {
    return this.eventsService.getAllEvents();
  }

  @Get(':id')
  async getEventById(@Param('id') id: string): Promise<Event | null> {
    return this.eventsService.getEventById(id);
  }

  @HasRoles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async createEvent(@Body() eventDto: EventDto) {
    return this.eventsService.createEvent(eventDto);
  }

  @HasRoles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async updateEvent(@Param('id') id: string, @Body() eventDto: EventDto) {
    return this.eventsService.updateEvent(id, eventDto);
  }

  @HasRoles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  async deleteEvent(@Param('id') id: string): Promise<Event> {
    return this.eventsService.deleteEvent(id);
  }
}
