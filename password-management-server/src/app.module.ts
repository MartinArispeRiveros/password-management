import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordCardsModule } from './password-cards/password-cards.module';

@Module({
  imports: [PasswordCardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
