import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vacation } from "../model/Vacation.model";
@Injectable({
    providedIn: 'root'
})

export class VacationService {
    constructor(private _httpClient: HttpClient) { }
    private baseUrl: string = 'https://localhost:7113/api/Vacation';

    getAllVacation(): Observable<Vacation[]> {
        return this._httpClient.get<Vacation[]>(this.baseUrl)
    }

    getVacationById(id: number): Observable<Vacation> {
        return this._httpClient.get<Vacation>(`${this.baseUrl}/${id}`)
    }

    deleteVacation(id: number): Observable<Vacation> {
        return this._httpClient.get<Vacation>(`${this.baseUrl}/${id}`)
    }

    addVacation(vac: Vacation): Observable<Vacation> {
        return this._httpClient.post<Vacation>(`this.baseUrl`, vac)
    }
}