import { Component, OnInit } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {
  constructor() {}
  imagenBase64!: string;

  ngOnInit(): void {}
  change(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.file[0];
      // toBase64(file).then(vm:string => this.imagenBase64 = value);
    }
  }
}
