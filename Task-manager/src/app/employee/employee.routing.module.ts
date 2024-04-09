import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacationCalendarComponent } from './components/vacation-calendar/vacation-calendar.component';



const employeeRoute: Routes = [
  { path: "vacation-calendar", component: VacationCalendarComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(employeeRoute)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
