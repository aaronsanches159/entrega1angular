import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipePipe } from './pipe.pipe'; // Asegúrate de que la ruta del archivo sea correcta

@NgModule({
  declarations: [
    PipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipePipe
  ]
})
export class PipesModule { }
