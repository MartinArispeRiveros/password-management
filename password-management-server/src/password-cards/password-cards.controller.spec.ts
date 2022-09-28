import { Test, TestingModule } from '@nestjs/testing';
import { PasswordCardsController } from './password-cards.controller';
import { PasswordCardsService } from './password-cards.service';

describe('PasswordCardsController', () => {
  let controller: PasswordCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasswordCardsController],
      providers: [PasswordCardsService],
    }).compile();

    controller = module.get<PasswordCardsController>(PasswordCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
