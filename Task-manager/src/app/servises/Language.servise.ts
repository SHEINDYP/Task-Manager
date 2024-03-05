import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Language } from "../model/Language.model";

@Injectable({
    providedIn:'root'
})

export class LanguageServise{
    constructor(private _httpClient:HttpClient){}

    getAllLanguage():Observable<Language[]>{
        return this._httpClient.get<Language[]>('https://localhost:7113/api/Language')
    }

    getLanguageById(id:number):Observable<Language>{
        return this._httpClient.get<Language>(`https://localhost:7113/api/Language/${id}`)
    }

    deleteLanguage(id:number):Observable<Language>{
        return this._httpClient.get<Language>(`https://localhost:7113/api/Language/${id}`)
    }

    // updateLanguage(id:number,emp:Language):Observable<Language>{
    //     return this._httpClient.get<Language>(`https://localhost:7163/api/Language/${id}`)
    // }

    

}