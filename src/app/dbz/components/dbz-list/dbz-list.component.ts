import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDBZCharacter } from '../../interface/IDBZCharacters';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbzListComponent {
  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public charactarData: IDBZCharacter[] = [];
  DeleteCharacter(uuid: string): void {
    console.log(uuid);

    this.onDeleteCharacter.emit(uuid);
  }
}
