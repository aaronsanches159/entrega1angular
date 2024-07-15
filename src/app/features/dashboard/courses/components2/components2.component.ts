import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Courses } from '../models';



@Component({
  selector: 'app-components2',
  templateUrl: './components2.component.html',
  styleUrl: './components2.component.scss'
})
export class Components2Component {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<Components2Component>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Courses
  ) {
    this.courseForm = this.fb.group({
      id: ['', Validators.required],
      curso: ['', Validators.required],
      startDate:['', Validators.required],
      endDate: ['', Validators.required],
 
    });

    if (this.editingCourse) {
      this.courseForm.patchValue(this.editingCourse);
    }
  }

  onSubmitCourse(): void {
    if (this.courseForm.valid) {
      this.matDialogRef.close(this.courseForm.value);
    } else {
      // Aquí podrías mostrar un mensaje de error si el formulario no es válido
    }
  }
  onCancel(): void {
    this.matDialogRef.close(null);
  }
}
