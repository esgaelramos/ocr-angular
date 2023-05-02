// lector-ocr.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-lector-ocr',
  templateUrl: './lector-ocr.component.html',
  styleUrls: ['./lector-ocr.component.css']
})
export class LectorOcrComponent {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  imagen: File | null = null;
  textoExtraido: string = '';
  ocrProgreso: number = 0;

  cargarImagen(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.imagen = target.files[0];
    }
  }

  abrirCamara() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'camera';
    input.addEventListener('change', (event) => {
      this.cargarImagen(event);
    });
    input.click();
  }

  realizarOCR() {
    if (this.imagen) {
      Tesseract.recognize(
        this.imagen,
        'eng',
        { logger: m => this.actualizarProgreso(m) }
      ).then(({ data: { text } }) => {
        this.textoExtraido = text;
      });
    }
  }

  actualizarProgreso(mensaje: any) {
    if (mensaje.status === 'recognizing text') {
      this.ocrProgreso = mensaje.progress * 100;
    }
    console.log(mensaje);
  }
}
