import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listaUsuarios: any[] = [
    {
      id: 1,
      name: 'Mario',
      username: 'Mario123',
      email: 'mar122@gmail.com',
      phonenumber: 7766546373,
      address: 'Ciudad de Mexico',
      fechaRegistro: new Date(),
      activo: true,
    },
    {
      id: 2,
      name: 'Josue',
      username: 'Josue123',
      email: 'Josue@gmail.com',
      phonenumber: 7654356789,
      address: 'Ciudad de Mexico',
      fechaRegistro: new Date(),
      activo: true,
    },
    {
      id: 3,
      name: 'Alberto',
      username: 'Albert123',
      email: 'Albert123@gmail.com',
      phonenumber: 933736833,
      address: 'Ciudad de Mexico',
      fechaRegistro: new Date(),
      activo: true,
    },
    {
      id: 4,
      name: 'Miguel',
      username: 'Miguel123',
      email: 'Star123@gmail.com',
      phonenumber: 3444523434324,
      address: 'Ciudad de Mexico',
      fechaRegistro: new Date(),
      activo: false,
    },
  ];

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
