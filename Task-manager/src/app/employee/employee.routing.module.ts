import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageEmployeeComponent } from './components/home-page-employee/home-page-employee.component';



const employeeRoute: Routes = [
  { path: "home-page-employee", component: HomePageEmployeeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(employeeRoute)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
