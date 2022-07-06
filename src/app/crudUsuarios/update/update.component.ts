import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usersCreationDTO } from 'src/app/crudUsuarios/Users';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(private router: Router) {}
  modelo?: usersCreationDTO = { nombre: 'Pedro' };
  ngOnInit(): void {}

  registrarUsuario(user: usersCreationDTO) {
    console.log(user);
    this.router.navigate(['listUsers']);
  }
}
