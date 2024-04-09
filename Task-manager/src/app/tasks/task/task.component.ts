import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { EmployeeService } from '../../services/Employee.service';
import { TaskService } from '../../services/Task.service';
import { Employee } from '../../model/Employee.model';
import { CardComponent } from '../card/card.component';
import { Task } from '../../model/Task.model';
import { log } from 'console';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  constructor(
    private _taskService: TaskService,
    private _employeeService: EmployeeService,
    private router: Router
  ) { }
  public tasks: Task[] | undefined;
  public taskReady: Task[] | undefined;
  public inProgress: Task[] | undefined;
  public needsReview: Task[] | undefined;
  public done: Task[] | undefined;
  @Input() public taskToApper!: number;
  public tempTasks: Task[] | undefined;
  public allEmployee!: Employee[];

  async ngOnInit() {

    try {
      // קריאה לשרת כדי לקבל את כל רשימת המשימות מהשרת
      const allTasks = await from(this._taskService.getAllTask()).toPromise();

      // אם המשתמש הוא מנהל
      if (this._employeeService.status == "0") {
        // הבא את רשימת כל העובדים מהשרת
        const allEmployeesResponse = await this._employeeService.getAllEmployee().toPromise();
        const allEmployees = allEmployeesResponse?.filter(
          (x) => x.managerId == this._employeeService.currentUserId
        );

        let tasksOfManagedEmployees: Task[] = [];
        if (allEmployees) {
          allEmployees.forEach((employee) => {
            let employeeTasks = allTasks?.filter(
              (task) => task.employeeId === employee.id
            );
            if (employeeTasks) {
              tasksOfManagedEmployees.push(...employeeTasks);
            }
          });
        }
        this.tasks = tasksOfManagedEmployees;
      }
      else if (this._employeeService.status == "1") {
        this.tasks = allTasks?.filter(
          (task) => task.employeeId == this._employeeService.currentUserId
        );
      } else {
        this.tasks = [];
        Swal.fire({
          title: 'You are not logged in/registered',
          showCancelButton: true,
          confirmButtonText: 'Register/Login',
          cancelButtonText: 'Later',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['./logIn/signIn']);
          }
        });
      }

      this.taskReady = this.tasks?.filter((t) => t.status == 0);
      this.inProgress = this.tasks?.filter((t) => t.status == 1);
      this.needsReview = this.tasks?.filter((t) => t.status == 2);
      this.done = this.tasks?.filter((t) => t.status == 3);
    } catch (err) {
      console.log(err);
    }
  }

  getTaskByCategory(): Task[] | undefined {
    switch (this.taskToApper) {
      case 0:
        return this.taskReady;
      case 1:
        return this.inProgress;
      case 2:
        return this.needsReview;
      case 3:
        return this.done;
      default:
        return this.tasks;
    }
  }
}
