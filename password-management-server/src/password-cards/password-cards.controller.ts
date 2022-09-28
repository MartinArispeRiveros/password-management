import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PasswordCardsService } from './password-cards.service';
import { CreatePasswordCardDto } from './dto/create-password-card.dto';
import { UpdatePasswordCardDto } from './dto/update-password-card.dto';

@Controller('password-cards')
export class PasswordCardsController {
  constructor(private readonly passwordCardsService: PasswordCardsService) {}

  @Post()
  create(@Body() createPasswordCardDto: CreatePasswordCardDto) {
    return this.passwordCardsService.create(createPasswordCardDto);
  }

  @Get()
  findAll(@Query() params: any) {
    return this.passwordCardsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passwordCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePasswordCardDto: UpdatePasswordCardDto) {
    return this.passwordCardsService.update(+id, updatePasswordCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passwordCardsService.remove(+id);
  }
}
