import { Injectable } from '@angular/core';
import { IPersona } from '../interfaces/IPersona.interfaz';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personasArray: IPersona[];
  //el subject nos va a permitir lanzar o emitir el evento para que todos los componentes que se suscriban al observable se enterend e los cambios
  //en este caso nuestro subject va a emitir un array de persona
  private personas$: Subject<IPersona[]>;

  constructor() {
    this.personasArray = [];
    this.personas$ = new Subject();
   }


   agregarPersona(persona: IPersona){
    this.personasArray.push(persona);
    this.personas$.next(this.personasArray);
   }

   getPersonas$():Observable<IPersona[]>{
    return this.personas$.asObservable();
   }

}
