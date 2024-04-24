import { Test, TestingModule } from '@nestjs/testing';
import { UserOnEventService } from './user-on-event.service';

describe('UserOnEventService', () => {
  let service: UserOnEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserOnEventService],
    }).compile();

    service = module.get<UserOnEventService>(UserOnEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
