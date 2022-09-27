import { Module } from '@nestjs/common';
import { PasswordCardsService } from './password-cards.service';
import { PasswordCardsController } from './password-cards.controller';

@Module({
  controllers: [PasswordCardsController],
  providers: [PasswordCardsService],
})
export class PasswordCardsModule {}
