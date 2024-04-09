import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { Employee } from "../model/Employee.model";
import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    constructor(private _httpClient: HttpClient, private router: Router) { }
    private baseUrl:string='https://localhost:7113/api/Employee'

    employee: Employee | undefined | null;
    status: string | undefined
    currentname: string | undefined
    currentUserId: string | undefined

    getAllEmployee(): Observable<Employee[]> {
        return this._httpClient.get<Employee[]>(this.baseUrl)
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this._httpClient.get<Employee>(`${this.baseUrl}/${id}`)
    }

    deleteEmployee(id: number): Observable<Employee> {
        return this._httpClient.delete<Employee>(`${this.baseUrl}/${id}`)
    }

    addNewEmployee(emp: Employee): Observable<Employee> {
        return this._httpClient.post<Employee>(this.baseUrl, emp)
    }


    login(emp: Employee) {
        this._httpClient.post(`https://localhost:7113/api/Login`, emp, { responseType: 'text' }).subscribe({
            next: (res: string) => {
                localStorage.setItem("user", res)
                console.log("good", res)
                this.router.navigate(['./homepage'])
            },
            error: (err) => {
                console.log(err)
            }
        }
        )
    }
}