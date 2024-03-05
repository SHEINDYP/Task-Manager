import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vacation } from "../model/Vacation.model";
@Injectable({
    providedIn:'root'
})

export class VacationServise{
    constructor(private _httpClient:HttpClient){}

    getAllVacation():Observable<Vacation[]>{
        return this._httpClient.get<Vacation[]>('https://localhost:7113/api/Vacation')
    }

    getVacationById(id:number):Observable<Vacation>{
        return this._httpClient.get<Vacation>(`https://localhost:7113/api/Vacation/${id}`)
    }

    deleteVacation(id:number):Observable<Vacation>{
        return this._httpClient.get<Vacation>(`https://localhost:7113/api/Vacation/${id}`)
    }

    // updateVacation(id:number,ts:Vacation):Observable<Vacation>{
    //     return this._httpClient.get<Vacation>(`https://localhost:7113/api/Vacation/${id}`)
    // }
}