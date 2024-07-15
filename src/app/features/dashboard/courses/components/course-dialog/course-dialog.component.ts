import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Students } from '../../models';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss',
})
export class CourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Students
  ) {
    this.courseForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      telefono: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]]
    });

    if (this.editingCourse) {
      this.courseForm.patchValue(this.editingCourse);
    }
  }

  onSubmitStudent(): void {
    if (this.courseForm.valid) {
      this.matDialogRef.close(this.courseForm.value);
    } else {
        alert("error")
    }
  }
}
