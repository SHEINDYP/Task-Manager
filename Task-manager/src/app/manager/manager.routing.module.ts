import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { InsertNewTaskComponent } from './components/insert-new-task/insert-new-task.component';

const managerRoute: Routes = [
  { path: "add-employee", component: AddEmployeeComponent },
  { path: "insert-new-task", component: InsertNewTaskComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(managerRoute)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
