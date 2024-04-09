import { LanguageForEmployee } from "./LanguageForEmployee.model"

export class Employee {
    id: number | null | undefined
    firstName: string | null | undefined
    LastName: string | null | undefined
    email: string | null | undefined
    password: string | null | undefined
    status: number | null | undefined
    managerId: number | null | undefined
    experience: number | null | undefined
    languageInt: { [language: string]: number } | null | undefined;
}