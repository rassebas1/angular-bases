import { NgModule } from "@angular/core";
import { CounterComponent } from "./Counter/counter.component";
import { ListComponent } from "./Hero/List/list.component";
import { HeroComponent } from "./Hero/Hero/hero.component";


@NgModule({
  imports:[
    CounterComponent,
    ListComponent,
    HeroComponent
  ],
  exports:[CounterComponent,
    HeroComponent,
    ListComponent
  ]
})
export class ComponentsModule{}
