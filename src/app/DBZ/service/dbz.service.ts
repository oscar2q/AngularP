import { Injectable } from '@angular/core';
import { characterdbz } from '../components/interface/character.interface';
/*descargamos una dependencia de uuid*/
import {v4 as generateuuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class Servicedbz{
  constructor() { }

  Listcharacterdbz:characterdbz[]=[{
    id:generateuuid(),
    name:'Vegetta',
    power:999
  },{
    id:generateuuid(),
    name:'Vulma',
    power:100
  },
  {
    id:generateuuid(),
    name:'Trunck',
    power:30
  },
  {
    id:generateuuid(),
    name:'Broly',
    power:9999
  }
    ];

  savecharacter(caracter:characterdbz):void{
    this.Listcharacterdbz.push(caracter)
  }

 deletelastdbzlist(indice:string):void{
    //LLAMAMOS NUESTRA LISTA FILTRAMOS listcharacterdbz tienen que ser distinto al id que no estan
    //enviando en tal caso que no sea distinto eliminalo y actualiza nuestra lista

    this.Listcharacterdbz=this.Listcharacterdbz.filter(listcharacterdbz=>listcharacterdbz.id!=indice)
    console.log(this.Listcharacterdbz)
  }

}

