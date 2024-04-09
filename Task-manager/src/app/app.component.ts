import { Component, NgModule, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './services/Employee.service';
 import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ], //CommonModule,RouterOutlet,LogInComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Task-manager';

  constructor(private _employeeService: EmployeeService) { }

  name = 'Angular';
  helper = new JwtHelperService();
  token: string | null | undefined
  decodedToken: any;


  ngOnInit(): void {
    this.token = localStorage.getItem("user")
    this.decodeToken(this.token);
    this._employeeService.status = this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    this._employeeService.currentUserId = this.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    this._employeeService.currentname = this.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
  }

  decodeToken(tkn: string | null): void {
    if (tkn) {
      this.token = tkn;
      this.decodedToken = this.helper.decodeToken(tkn);
      console.log("b", this.decodedToken)

    }
  }



}



