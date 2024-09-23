
import { Component } from "@angular/core";

@Component({
  standalone:true,
  selector:'app-counter',
  templateUrl:'./counter.component.html',
  styleUrl:'./counter.component.css'
})
export class CounterComponent{

  public counter: number = 0;

  increaseBy(): void {
    this.counter += 1;
  }
  decreaseBy(): void {
    this.counter -= 1;
  }
  resetCounter() {
    this.counter = 0;
  }
}
