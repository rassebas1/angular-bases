import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroList:string[]=['Spiderman','Hulk','Ironman','She-Hulk','Thor'];
  public deletedHero?:string =undefined;

  removeLastHero():void{
    this.deletedHero = this.heroList.pop()
  }
}
