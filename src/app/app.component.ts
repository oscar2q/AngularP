import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from './appcounter/counter.component';
import { HeroComponent } from './Heros/Hero/hero.component';
import { ListHerosComponent } from './Heros/list-heros/list-heros.component';
import { MainPageCsomponents } from './DBZ/components/pages/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NameComponent,HeroComponent
    ,ListHerosComponent,MainPageCsomponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string='VTB';


}
