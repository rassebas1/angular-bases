import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { IDBZCharacter } from '../../interface/IDBZCharacters';

@Component({
  selector: 'dbz-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dbz-form.component.html',
  styleUrl: './dbz-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbzFormComponent {
  @Output()
  onNewCharacter: EventEmitter<IDBZCharacter> = new EventEmitter();

  public character: IDBZCharacter = {
    uuid: '',
    name: '',
    power: 0,
  };

  public addCharacter(): void {
    if (this.character.name.length === 0) return;
    this.character.uuid = uuid();
    console.log(this.character);
    this.onNewCharacter.emit(this.character);
    this.character = {
      uuid: '',
      name: '',
      power: 0,
    };
  }
}
