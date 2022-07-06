import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/letraMayuscula';
import { usersCreationDTO } from 'src/app/crudUsuarios/Users';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  registrarUsuario(user: usersCreationDTO) {
    console.log(user);
    this.router.navigate(['listUsers']);
  }
  // listaUsuarios: any[] = [
  //   {
  //     id: 1,
  //     name: 'Mario',
  //     username: 'Mario123',
  //     email: 'mar122@gmail.com',
  //     phonenumber: 7766546373,
  //     address: 'Ciudad de Mexico',
  //     fechaRegistro: new Date(),
  //     activo: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'Josue',
  //     username: 'Josue123',
  //     email: 'Josue@gmail.com',
  //     phonenumber: 7654356789,
  //     address: 'Ciudad de Mexico',
  //     fechaRegistro: new Date(),
  //     activo: true,
  //   },
  //   {
  //     id: 3,
  //     name: 'Alberto',
  //     username: 'Albert123',
  //     email: 'Albert123@gmail.com',
  //     phonenumber: 933736833,
  //     address: 'Ciudad de Mexico',
  //     fechaRegistro: new Date(),
  //     activo: true,
  //   },
  //   {
  //     id: 4,
  //     name: 'Miguel',
  //     username: 'Miguel123',
  //     email: 'Star123@gmail.com',
  //     phonenumber: 3444523434324,
  //     address: 'Ciudad de Mexico',
  //     fechaRegistro: new Date(),
  //     activo: false,
  //   },
  // ];
}
