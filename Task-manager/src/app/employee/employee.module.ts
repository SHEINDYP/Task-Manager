import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TaskComponent } from '../tasks/task/task.component';
import { EmployeeRoutingModule } from './employee.routing.module';
import { VacationCalendarComponent } from './components/vacation-calendar/vacation-calendar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@NgModule({
    declarations: [ VacationCalendarComponent],
    exports: [VacationCalendarComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterOutlet,
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        TaskComponent,
        EmployeeRoutingModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        RouterOutlet,
        RouterModule,
        SideBarComponent,
    ]
})
export class EmployeeModule {}
