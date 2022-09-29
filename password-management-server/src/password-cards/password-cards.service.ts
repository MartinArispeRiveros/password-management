import { Injectable } from '@nestjs/common';
import { CreatePasswordCardDto } from './dto/create-password-card.dto';
import { UpdatePasswordCardDto } from './dto/update-password-card.dto';
import { readFileSync, writeFileSync } from 'fs';

const DATA_PATH = 'resources/data.json';
const getPasswordCardData = () => {
  const data = readFileSync(DATA_PATH, 'utf8');
  return JSON.parse(data);
};

const savePasswordCardData = (data) => {
  const stringifyData = JSON.stringify(data);
  writeFileSync(DATA_PATH, stringifyData);
};

@Injectable()
export class PasswordCardsService {
  create(createPasswordCardDto: CreatePasswordCardDto) {
    const existPasswordCards = getPasswordCardData();
    const newPasswordCardtId = Math.floor(100000 + Math.random() * 900000);
    const result = existPasswordCards.find(
      ({ name }) => name === createPasswordCardDto.name,
    );
    if (result === undefined) {
      createPasswordCardDto.id = newPasswordCardtId;
      existPasswordCards.push(createPasswordCardDto);
    }
    savePasswordCardData(existPasswordCards);
    return 'This action adds a new passwordCard';
  }

  findAll(params) {
    let result = [];
    const existPasswordCards = getPasswordCardData();
    if (params.filterName) {
      result = existPasswordCards.filter((passwordCard) => {
        return passwordCard.name
          .toLowerCase()
          .includes(params.filterName.toLowerCase());
      });
    } else {
      result = existPasswordCards;
    }
    return result;
  }

  findOne(idPasswordCard: number) {
    const existPasswordCards = getPasswordCardData();
    const passwordCard = existPasswordCards.find(
      ({ id }) => id === idPasswordCard,
    );
    return passwordCard;
  }

  update(idPasswordCard: number, updatePasswordCardDto: UpdatePasswordCardDto) {
    const existPasswordCards = getPasswordCardData();
    let passwordCard = existPasswordCards.find(
      ({ id }) => id === idPasswordCard,
    );
    passwordCard = updatePasswordCardDto;
    const objWithIdIndex = existPasswordCards.findIndex(
      (obj) => obj.id === idPasswordCard,
    );
    existPasswordCards.splice(objWithIdIndex, 1);
    existPasswordCards.push(passwordCard);
    savePasswordCardData(existPasswordCards);
    return `This action updates a #${idPasswordCard} passwordCard`;
  }

  remove(idPasswordCard: number) {
    const existPasswordCards = getPasswordCardData();
    const objWithIdIndex = existPasswordCards.findIndex(
      (obj) => obj.id === idPasswordCard,
    );
    existPasswordCards.splice(objWithIdIndex, 1);
    savePasswordCardData(existPasswordCards);
    return `This action removes a #${idPasswordCard} passwordCard`;
  }
}
