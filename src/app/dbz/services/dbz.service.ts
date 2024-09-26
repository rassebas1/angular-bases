import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { IDBZCharacter } from '../interface/IDBZCharacters';

@Injectable({
  providedIn: 'root',
})
export class DBZService {
  public characters: IDBZCharacter[] = [
    {
      uuid: uuid(),
      name: 'Krillin',
      power: 500,
    },
    {
      uuid: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      uuid: uuid(),
      name: 'Trunks',
      power: 8000,
    },
  ];

  onNewCharacter(character: IDBZCharacter): void {
    this.characters.push(character);
  }
  onDeleteCharacter(uuid: string): void {
    this.characters = this.characters.filter(
      (character) => character.uuid !== uuid
    );
  }

  constructor() {}
}
