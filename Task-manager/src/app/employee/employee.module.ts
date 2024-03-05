import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TaskComponent } from '../task/task.component';
import { HomePageEmployeeComponent } from './components/home-page-employee/home-page-employee.component';
import { EmployeeRoutingModule } from './employee.routing.module';

@NgModule({
  declarations: [HomePageEmployeeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    TaskComponent,
    EmployeeRoutingModule
  ],
})
export class EmployeeModule {}
