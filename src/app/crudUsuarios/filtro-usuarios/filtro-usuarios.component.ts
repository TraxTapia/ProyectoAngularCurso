import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-usuarios',
  templateUrl: './filtro-usuarios.component.html',
  styleUrls: ['./filtro-usuarios.component.css'],
})
export class FiltroUsuariosComponent implements OnInit {
  constructor(private fr: FormBuilder) {}
  filterForm!: FormGroup;
  area = [
    { id: 1, nombre: 'Sistemas' },
    { id: 2, nombre: 'Seguros' },
    { id: 3, nombre: 'Medecina' },
    { id: 4, nombre: 'Limpieza' },
    { id: 5, nombre: 'Recursos Humanos' },
    { id: 6, nombre: 'Operaciones' },
    { id: 7, nombre: 'Medecina' },
  ];

  ngOnInit(): void {
    this.filterForm = this.fr.group({
      nombre: '',
      idArea: 0,
      activo: false,
    });
  }
  limpiar(){
    
  }
}
