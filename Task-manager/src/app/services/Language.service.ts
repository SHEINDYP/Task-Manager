import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Language } from "../model/Language.model";

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    constructor(private _httpClient: HttpClient) { }
    private baseUrl: string = 'https://localhost:7113/api/Language';

    getAllLanguage(): Observable<Language[]> {
        return this._httpClient.get<Language[]>(this.baseUrl)
    }

    getLanguageById(id: number): Observable<Language> {
        return this._httpClient.get<Language>(`${this.baseUrl}/${id}`)
    }

    deleteLanguage(id: number): Observable<Language> {
        return this._httpClient.get<Language>(`${this.baseUrl}/${id}`)
    }

}