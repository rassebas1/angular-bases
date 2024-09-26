import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './Components/Components.module';
import { MainPageComponent } from './dbz/pages/main-page/main-page.component';
import { DbzModule } from './dbz/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponentsModule,
    DbzModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Nueva App Angular';

}
