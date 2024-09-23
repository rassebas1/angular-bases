import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string='Ironman';
  public age:number=23;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  get heroDescription(){
    return `${this.name} - ${this.age} `;
  }

  setheroName(name:string):void{
    this.name=name;
  }
  setheroAge(age:number):void{
    this.age=age;
  }
  isOriginal():boolean{
    if(this.name=='Ironman' && this.age==23){
      return true;
    }
    return false;
  }

  resetForm():void{
    this.name='Ironman';
    this.age=23
  }
}
