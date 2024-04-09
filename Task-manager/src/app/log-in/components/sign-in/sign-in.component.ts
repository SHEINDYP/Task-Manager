import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/Employee.service';
import { Employee } from '../../../model/Employee.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})


export class SignInComponent implements OnInit {

  public loginEmployee!: FormGroup
  public sendEmployee!: Employee

  constructor(private router: Router, private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loginEmployee = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      Password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[\x21-\x7E]{6,}$/)
      ]),
    })
  }

  login() {
    this.sendEmployee = new Employee();
    this.sendEmployee.email = this.loginEmployee.get('Email')?.value;
    this.sendEmployee.password = this.loginEmployee.get('Password')?.value;

    console.log(this.sendEmployee)
    this._employeeService.login(this.sendEmployee)
  }

  goToSignUp() {
    this.router.navigate(["/logIn/signUp"]);
  }

}
