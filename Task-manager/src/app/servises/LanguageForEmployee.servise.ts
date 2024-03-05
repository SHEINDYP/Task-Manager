import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LanguageForEmployee } from "../model/LanguageForEmployee.model";
@Injectable({
    providedIn:'root'
})

export class LanguageForEmployeeServise{
    constructor(private _httpClient:HttpClient){}

    getAllLanguageForEmployee():Observable<LanguageForEmployee[]>{
        return this._httpClient.get<LanguageForEmployee[]>('https://localhost:7113/api/LanguageForEmployee')
    }

    getLanguageForEmployeeById(id:number):Observable<LanguageForEmployee>{
        return this._httpClient.get<LanguageForEmployee>(`https://localhost:7113/api/LanguageForEmployee/${id}`)
    }

    deleteLanguageForEmployee(id:number):Observable<LanguageForEmployee>{
        return this._httpClient.get<LanguageForEmployee>(`https://localhost:7113/api/LanguageForEmployee/${id}`)
    }

    // updateLanguageForEmployee(id:number,lanforemp:LanguageForEmployee):Observable<LanguageForEmployee>{
    //     return this._httpClient.get<LanguageForEmployee>(`https://localhost:7163/api/LanguageForEmployee/${id}`)
    // }
}