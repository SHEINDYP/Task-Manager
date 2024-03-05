import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../model/Task.model";
@Injectable({
    providedIn:'root'
})

export class TaskServise{
    constructor(private _httpClient:HttpClient){}

    getAllTask():Observable<Task[]>{
        return this._httpClient.get<Task[]>('https://localhost:7113/api/Task')
    }

    getTaskById(id:number):Observable<Task>{
        return this._httpClient.get<Task>(`https://localhost:7113/api/Task/${id}`)
    }

    deleteTask(id:number):Observable<Task>{
        return this._httpClient.get<Task>(`https://localhost:7113/api/Task/${id}`)
    }

    insertTask(task:Task):Observable<Task>{
        return this._httpClient.post<Task>(`https://localhost:7113/api/Task`,task)
    }



    // updateTask(id:number,ts:Task):Observable<Task>{
    //     return this._httpClient.get<Task>(`https://localhost:7113/api/Task/${id}`)
    // }
}