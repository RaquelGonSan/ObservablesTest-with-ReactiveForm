import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/interfaces/IPersona.interfaz';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaPersonas: IPersona[] = [];
  numPersonas :number = 0;

  constructor(private personaService: PersonasService){

  }

  ngOnInit(): void {
    this.personaService.getPersonas$().subscribe(personasdata =>{
      this.listaPersonas = personasdata;
      this.numPersonas = personasdata.length;
    })
  }

}
