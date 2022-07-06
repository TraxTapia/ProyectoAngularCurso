import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  permiso = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  crearUsuario() {
    this.router.navigate(['/users']);
  }
}
