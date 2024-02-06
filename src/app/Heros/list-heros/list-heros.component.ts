import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heros',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-heros.component.html',
  styleUrl: './list-heros.component.css'
})
export class ListHerosComponent {

  public nameHero=['dead','by','daylight'];
  nametemp?:string;
  //borrar heroue
  public borrarHerous():void{
    this.nametemp=this.nameHero.pop();
  }
}
