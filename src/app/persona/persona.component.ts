import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

//FormControl: trackea el valor y estado de un input
//FormGroup: trackea el valor y estado de un grupo de inputs ej usuario y contraseña
//FormArray: trackea el valor y estado de un array de inputs (cajas de texto son los inputs)

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  /*
  personaForm= new FormGroup({
    nombre : new FormControl(''),
    apellido : new FormControl(''),
    edad: new FormControl(''),
    direccion: new FormGroup({
        calle: new FormControl(''),
        numero: new FormControl('')
    })
  })
  */
  personaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  initPersonaForm(){
    this.personaForm = this.fb.group({
      nombre: [ '' ],
      apellido: '',
      edad: '',
      direccion: this.fb.group({
          calle: '',
          numero: ''
      }),
      telefonos: this.fb.array([this.fb.control('')])
    })
    
  }

  get telefonos(){
    return this.personaForm.get('telefonos') as FormArray;
  }
  agregarTelefono(){
    console.warn("Holaaa")
    console.error("Chauuu")
    this.telefonos.push(this.fb.control(''));
  }

  cambiarNombre() {
      this.personaForm.setValue({
        nombre: 'Leo',
        apellido: 'Messi',
        edad: 33,
        direccion: {
          calle: 'San Martin',
          numero: 300
        }
      })
  

    this.personaForm.patchValue({
     direccion: {
       numero: 300
     }
    });
  }
  crearPersona(){
     
  }
}
