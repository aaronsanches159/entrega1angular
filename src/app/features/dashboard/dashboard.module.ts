import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CoursesModule } from './courses/courses.module';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    DashboardComponent,
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CoursesModule,
    MatListModule,
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
