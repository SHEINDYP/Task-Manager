import { LanguageForEmployee } from "./LanguageForEmployee.model"

export class Employee{
    Id!:number
    FirstName!:string
    LastName!:string
    Email!:string
    Password!:string
    Status!:number
    ManagerId?:number
    Experience!:number
    LanguageForEmployee!:LanguageForEmployee[]
}