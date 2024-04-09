import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AddEmployeeComponent } from '../manager/components/add-employee/add-employee.component';

import Swal from 'sweetalert2';

import { TaskComponent } from '../tasks/task/task.component';
import { EmployeeService } from '../services/Employee.service';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, TaskComponent,],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  constructor(private router: Router, private _employeeService: EmployeeService) { }
  showFiller = false;
  public taskToApper: number = -1;
  public currentEmp = parseInt(this._employeeService.status || '0')

  public currentName = this._employeeService.currentname

  public addNewEmployee = false;
  public NewTask = false;
  public Vacation = false;

  createNewTask() {
    this.NewTask = true
    this.router.navigate(['/manager/insert-new-task']);
  }

  createNewEmployee() {
    this.addNewEmployee = true;
    this.router.navigate(['/manager/add-employee']);
  }

  addVacation() {
    this.Vacation = true;
    this.router.navigate(['/employee/vacation-calendar']);
  }

  showAllTasks() {
    this.taskToApper = -1
  }
  showReadyTasks() {
    this.taskToApper = 0
  }

  showInProgressTasks() {
    this.taskToApper = 1
  }

  showNeedsReviewTasks() {
    this.taskToApper = 2
  }
  showDoneTasks() {
    this.taskToApper = 3
  }

  logout() {
    Swal.fire({
      title: "Log Out",
      text: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "rgb(17, 17, 169)",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      allowOutsideClick: false // אם תרצה לאפשר להשתמש להקליק מחוץ לחלון האזהרה
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
      }
    });
  }

}

