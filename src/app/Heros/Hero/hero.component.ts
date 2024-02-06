import { Component } from '@angular/core';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string='Victory'
  public edad:number=21;

  public setname():void{
    this.name='Sukuna';
  }
  public setedad():void{
    this.edad=9999
  }
  public reset():void{
    this.name='Victory'
    this.edad=21
  }

}
