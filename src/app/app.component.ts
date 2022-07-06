import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AplicacionAngular';
  derechosAutor = 'Trax Tapia';
  anoCopy = Date();
  permiso = 0;
  // año = new Date.now();
}
