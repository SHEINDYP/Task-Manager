import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../model/Task.model";
@Injectable({
    providedIn: 'root'
})

export class TaskService {

    private baseUrl: string = 'https://localhost:7113/api/Task';
    constructor(private _httpClient: HttpClient) { }

    getAllTask(): Observable<Task[]> {
        return this._httpClient.get<Task[]>(this.baseUrl)
    }

    getTaskById(id: number): Observable<Task> {
        return this._httpClient.get<Task>(`${this.baseUrl}/${id}`)
    }

    deleteTask(id: number): Observable<Task> {
        return this._httpClient.delete<Task>(`${this.baseUrl}/${id}`)
    }

    insertTask(task: Task): Observable<Task> {
        return this._httpClient.post<Task>(this.baseUrl, task)
    }



    updateTask(id: number, ts: Task): Observable<Task> {
        return this._httpClient.put<Task>(`${this.baseUrl}/${id}`, ts)
    }
}