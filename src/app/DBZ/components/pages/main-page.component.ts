import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { AddformsComponent } from '../addforms/addforms.component';
import { ListcharacterComponent } from '../listcharacter/listcharacter.component';
import { Servicedbz } from '../../service/dbz.service';
import { characterdbz } from '../interface/character.interface';

@Component({
  selector: 'Mainpage-name',
  templateUrl: './main-page-components.html',
  standalone:true,
  imports:[AddformsComponent,
    ListcharacterComponent,JsonPipe]
})

export class MainPageCsomponents{
  constructor(private _ServiceDbz:Servicedbz){}

  public getCharacters():characterdbz[]{
    //esto hace que nos da una copia de lo que nos devuelve
    return [...this._ServiceDbz.Listcharacterdbz];
  }

  public deleteCharater(indice:string):void{
    this._ServiceDbz.deletelastdbzlist(indice);
  }
  public SaveCharacters(caracter:characterdbz):void{
    this._ServiceDbz.savecharacter(caracter);
  }


}
