import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../model/Employee.model";

@Injectable({
    providedIn:'root'
})

export class EmployeeServise{
    constructor(private _httpClient:HttpClient){}

    getAllEmployee():Observable<Employee[]>{
        return this._httpClient.get<Employee[]>('https://localhost:7113/api/Employee')
    }

    getEmployeeById(id:number):Observable<Employee>{
        return this._httpClient.get<Employee>(`https://localhost:7113/api/Employee/${id}`)
    }

    deleteEmployee(id:number):Observable<Employee>{
        return this._httpClient.delete<Employee>(`https://localhost:7113/api/Employee/${id}`)
    }

    addNewEmployee(emp:Employee):Observable<Employee>{
        return this._httpClient.post<Employee>(`https://localhost:7113/api/Employee`,emp)
    }

    // updateEmployee(id:number,emp:Employee):Observable<Employee>{
    //     return this._httpClient.get<Employee>(`https://localhost:7163/api/Employee/${id}`)
    // }
}