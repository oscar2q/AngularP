import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { characterdbz } from '../interface/character.interface';
import { JsonPipe } from '@angular/common';
import { v4  as generateid} from 'uuid';

@Component({
  selector: 'app-addforms-dbz',
  standalone: true,
  imports:[FormsModule,JsonPipe],
  templateUrl: './addforms.component.html',
  styleUrl: './addforms.component.css'
})
export class AddformsComponent{
  /* quiero que este elemento sea emitir y escuchar eventos<que devuelva
  el valor de esta manera> */
  /* y estanciamos nuestro evento */
  @Output()
  public onNewCharacter:EventEmitter<characterdbz>=new EventEmitter();

  public characterdbz:characterdbz={
    id:generateid(),
    name:'',
    power:0
  }
  savecharacter():void{
    if(this.characterdbz.name.length>0 && this.characterdbz.power>0){
      //limpiamos el formulario
      this.onNewCharacter.emit(this.characterdbz)
      this.characterdbz={id:generateid(),name:'',power:0}
    }
  }

}
