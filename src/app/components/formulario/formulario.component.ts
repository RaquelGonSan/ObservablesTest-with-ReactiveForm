import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private personaService: PersonasService, private form: FormBuilder){
  
    this.formulario =  this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos : new FormControl,
      empresa: new FormControl,
      telefono: ['', [Validators.required, Validators.minLength(9)]],
      email:  ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.personaService.agregarPersona(this.formulario.value);
  }

  hasErrors(controlName:string, errorType:string){
    return this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched;
  }

}
