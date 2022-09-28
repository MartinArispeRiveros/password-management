import { Test, TestingModule } from '@nestjs/testing';
import { PasswordCardsService } from './password-cards.service';

describe('PasswordCardsService', () => {
  let service: PasswordCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordCardsService],
    }).compile();

    service = module.get<PasswordCardsService>(PasswordCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
