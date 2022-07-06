import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/letraMayuscula';
import { EventEmitter } from '@angular/core';
import { usersCreationDTO } from 'src/app/crudUsuarios/Users';

@Component({
  selector: 'app-formulario-users',
  templateUrl: './formulario-users.component.html',
  styleUrls: ['./formulario-users.component.css'],
})
export class FormularioUsersComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}
  frmUsers!: FormGroup;
  @Input()
  modelo?: usersCreationDTO;
  @Output()
  submit: EventEmitter<usersCreationDTO> = new EventEmitter<usersCreationDTO>();
  //  = new EventEmitter<usersCreationDTO>();

  nombrePersona = 'Juan';
  ngOnInit(): void {
    this.frmUsers = this.formBuilder.group({
      idUser: 0,
    });
    this.frmUsers = this.formBuilder.group({
      nombre: [
        '',
        [Validators.required, Validators.minLength(5), primeraLetraMayuscula()],
      ],
    });
    if (this.modelo !== undefined) {
      this.frmUsers.patchValue(this.modelo);
    }
  }
  registrarUsuario() {
    this.submit.emit(this.frmUsers.value);
  }

  // validacion de campos requeridos
  errorInputNombre() {
    let campo = this.frmUsers.get('nombre');
    if (campo?.hasError('required')) {
      return 'El campo es requerido';
    }
    if (campo?.hasError('minLength')) {
      return 'La longitud debe de ser de 5 caracteres';
    }
    //EJEMPLO DE VALIDACION PERSONALIZADA LA VALIDACION SE LLAMA primeraLetraMayuscula
    if (campo?.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
  }
}
