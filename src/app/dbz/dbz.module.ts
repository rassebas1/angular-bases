import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DbzListComponent } from "./components/dbz-list/dbz-list.component";
import { DbzFormComponent } from './components/dbz-form/dbz-form.component';



@NgModule({
  exports:[MainPageComponent],
  declarations: [
    MainPageComponent,

  ],
  imports: [
    CommonModule,
    DbzListComponent,
    DbzFormComponent
]
})
export class DbzModule { }
