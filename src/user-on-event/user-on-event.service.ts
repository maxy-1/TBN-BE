import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, UserOnEvent } from '@prisma/client';

@Injectable()
export class UserOnEventService {
  constructor(private prisma: PrismaService) {}

  async addUserToEvent(userId: string, eventId: string): Promise<void> {
    await this.prisma.userOnEvent.create({
      data: {
        userId,
        eventId,
      },
    });
  }

  async removeUserFromEvent(userId: string, eventId: string): Promise<void> {
    await this.prisma.userOnEvent.delete({
      where: {
        userId_eventId: {
          userId,
          eventId,
        },
      },
    });
  }

  async getUsersByEventId(eventId: string): Promise<UserOnEvent[]> {
    return this.prisma.userOnEvent.findMany({
      where: {
        eventId,
      },
    });
  }

}
