import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDBZCharacter } from '../../interface/IDBZCharacters';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbzListComponent {

  @Output()
  onDeleteCharacter: EventEmitter<number> = new EventEmitter();


  @Input()
  public charactarData: IDBZCharacter[] = [];
  DeleteCharacter(index: number): void {
    //todo: index
    this.onDeleteCharacter.emit(index)
    console.log(index)
  }
}
