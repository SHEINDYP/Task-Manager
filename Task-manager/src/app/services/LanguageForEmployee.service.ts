import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LanguageForEmployee } from "../model/LanguageForEmployee.model";
@Injectable({
    providedIn: 'root'
})

export class LanguageForEmployeeService {
    constructor(private _httpClient: HttpClient) { }
    private baseUrl:string='https://localhost:7113/api/LanguageForEmployee'

    getAllLanguageForEmployee(): Observable<LanguageForEmployee[]> {
        return this._httpClient.get<LanguageForEmployee[]>(this.baseUrl)
    }

    getLanguageForEmployeeById(id: number): Observable<LanguageForEmployee> {
        return this._httpClient.get<LanguageForEmployee>(`${this.baseUrl}/${id}`)
    }

    deleteLanguageForEmployee(id: number): Observable<LanguageForEmployee> {
        return this._httpClient.get<LanguageForEmployee>(`${this.baseUrl}/${id}`)
    }
}