import { PartialType } from '@nestjs/mapped-types';
import { CreatePasswordCardDto } from './create-password-card.dto';

export class UpdatePasswordCardDto extends PartialType(CreatePasswordCardDto) {}
