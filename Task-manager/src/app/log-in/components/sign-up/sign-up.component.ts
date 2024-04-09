import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/Employee.service';
import { Employee } from '../../../model/Employee.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  constructor(
    private router: Router,
    private _employeeService: EmployeeService
  ) { }

  public addNewManagerForm!: FormGroup;
  public employee!: Employee;
  public flagEmail = false;

  ngOnInit(): void {
    this.addNewManagerForm = new FormGroup({
      FirstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^.{3,}$'),
      ]),
      LastName: new FormControl('', [
        Validators.required,
        Validators.pattern('^.{3,}$'),
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),

      Experience: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^\d+$/),
      ]),

      Password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[\x21-\x7E]{6,}$/),
      ]),
    });
  }

  save_save() {
    this.employee = this.addNewManagerForm.value;
    this.employee.status = 0;
    console.log(this.addNewManagerForm.value.firstName);

    console.log('save_save:  ', this.employee);
    this._employeeService.addNewEmployee(this.employee).subscribe({
      next: (res) => {
        this.employee = res;
        console.log(this.employee);
        if (res == null) {
          this.flagEmail = true;
          alert('*Email exist');
        } else {
          this.flagEmail = false;
          localStorage.setItem('user', JSON.stringify(res));
          this._employeeService.employee = res;
          this.router.navigate(['./homepage']);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  goToSignIn() {
    console.log('in goToSignIn function');
    this.router.navigate(['/logIn/signIn']);
  }
}
