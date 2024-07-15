// pipe.pipe.ts
// pipe.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class PipePipe implements PipeTransform {
  transform(student: { nombre: string, apellido: string }): string {
    if (!student) return '';
    return `${student.nombre} ${student.apellido}`;
  }
}