import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager.routing.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { InsertNewTaskComponent } from './components/insert-new-task/insert-new-task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { SideBarComponent } from '../side-bar/side-bar.component';
@NgModule({
  declarations: [
    AddEmployeeComponent,
    InsertNewTaskComponent,
  ],
  imports: [
    SideBarComponent,
    CommonModule,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatStepper,
    MatStep,
    MatLabel,
    ManagerRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  exports: [InsertNewTaskComponent, AddEmployeeComponent,]
})
export class ManagerModule { }
