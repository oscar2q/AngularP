import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'selector-name',
  template: `
  <h3>{{counter}}</h3>
  <button (click)="Incremt()">Incrementar</button>
  <button (click)="Descment(counter)">Decrementar</button>
  <button (click)="reset()">Reset</button>
  `
})

export class NameComponent {
  constructor() { }
  public counter:number=0;

  public Incremt():void{
    this.counter+=1;
  }
  public Descment(number:number):void{
    if(number>0){
      this.counter-=1
    }
  }
  public reset():void{
      this.counter=0;
  }

}
