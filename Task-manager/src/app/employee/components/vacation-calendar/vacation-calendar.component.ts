import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vacation } from '../../../model/Vacation.model';
import { VacationService } from '../../../services/Vacation.service';
import { EmployeeService } from '../../../services/Employee.service';

@Component({
  selector: 'app-vacation-calendar',
  templateUrl: './vacation-calendar.component.html',
  styleUrl: './vacation-calendar.component.css',
})
export class VacationCalendarComponent implements OnInit {
  public newVacationForm!: FormGroup;
  public vacation!: Vacation;

  public date = new Date();
  public today = `${this.date.getDate()}-${this.date.getMonth()}-${this.date.getFullYear()}`;
  public validDate = false;

  constructor(
    private _vacationService: VacationService,
    private _employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    console.log('DATE:  ', this.today, 'IN INT: ', parseInt(this.today));
    
    this.newVacationForm = new FormGroup({
      FromDate: new FormControl('', [
        Validators.required,
      ]),
      ToDate: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  addNewVacation() {
    this.vacation = this.newVacationForm.value;
    this.vacation.employeeId= parseInt(this._employeeService.currentUserId || "0");

    this._vacationService.addVacation(this.vacation).subscribe({
      next: (res) => {
        this.vacation = res;
        alert('add new vacation :)');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
