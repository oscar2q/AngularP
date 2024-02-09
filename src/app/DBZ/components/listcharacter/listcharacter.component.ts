import { Component, EventEmitter, Input, Output } from '@angular/core';
import { characterdbz } from '../interface/character.interface';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-listcharacter-DBZ',
  standalone: true,
  imports: [CommonModule,NgClass],
  templateUrl: './listcharacter.component.html',
  styleUrl: './listcharacter.component.css'
})
export class ListcharacterComponent {
  @Input()
  public characterdbz:characterdbz[]=[];

  @Output()
  public deletecharacter:EventEmitter<string>=new EventEmitter()

  //Delete
  Deletemen(indice:string):void{
    this.deletecharacter.emit(indice);
  }

}
