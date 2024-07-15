import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { Students, Courses } from './models';
import { Components2Component } from './components2/components2.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})



export class CoursesComponent {


// TABLA DE ESTUDIANTES
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'telefono', 'mail', 'acciones'];
  dataSource: Students[] = [];

// TABLA DE CURSOS
  courseDataSource: Courses[] = [];
  displayedCourseColumns: string[] = ['id', 'curso', 'startDate', 'endDate', 'acciones'];


  constructor (private matDialog: MatDialog) {}

  openDialogStudent(): void {
    this.matDialog.open(CourseDialogComponent).afterClosed().subscribe({
      next: (value: Students) => {
        console.log("Recibimos el argumento", value);
        this.dataSource = [...this.dataSource, value];
      }
    });
  }

  openDialogCourse(): void {
    this.matDialog.open(Components2Component).afterClosed().subscribe({
      next: (value) =>{
        console.log("recibimos el argumento", value);
        
        this.courseDataSource = [...this.courseDataSource, value];
      }
        });
  }

  deleteCourseId(id: string){
    this.dataSource = this.dataSource.filter ((el)=> el.id != id)
  }
}
