import { Test, TestingModule } from '@nestjs/testing';
import { UserOnEventController } from './user-on-event.controller';

describe('UserOnEventController', () => {
  let controller: UserOnEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserOnEventController],
    }).compile();

    controller = module.get<UserOnEventController>(UserOnEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
