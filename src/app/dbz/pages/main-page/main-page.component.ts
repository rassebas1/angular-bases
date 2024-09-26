import { Component } from '@angular/core';
import { DBZService } from '../../services/dbz.service';
import { IDBZCharacter } from '../../interface/IDBZCharacters';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.css',
})
export class MainPageComponent {
  constructor(private dbzService: DBZService) {}


  public get characters() : IDBZCharacter[] {
    return [... this.dbzService.characters]
  }

  public deleteCharacterById(uuid:string){
    this.dbzService.onDeleteCharacter(uuid)
  }
  public createCharacter(character:IDBZCharacter){
    this.dbzService.onNewCharacter(character)
  }

}
