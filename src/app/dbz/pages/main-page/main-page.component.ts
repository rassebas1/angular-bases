import { Component } from '@angular/core';
import { IDBZCharacter } from '../../interface/IDBZCharacters';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.css'
})

export class MainPageComponent {
  constructor() { }
  public characters: IDBZCharacter[] = [
    {
      name: 'Krillin',
      power: 500
    },
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Trunks',
      power: 8000
    }
  ]

  onNewCharacter(character: IDBZCharacter): void {
    console.log(character);
    this.characters.unshift(character);
    console.log(this.characters);
  }
  onDeleteCharacter(index: number): void {
    console.log(this.characters[index]);
    this.characters.splice(index,1);
    console.log(this.characters)
  }

}
