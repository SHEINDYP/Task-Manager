import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Employee } from '../../../model/Employee.model';
import { Router } from '@angular/router';
import { EmployeeServise } from '../../../servises/Employee.servise';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  //-----לעיצוב עם צעדים-----//
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });

  // constructor(private _formBuilder: FormBuilder) {}
  public newEmployeeForm!: FormGroup;
  public employee!: Employee;
  public selectedLanguageArr!: {
    Id: number;
    IdEmployee: number;
    LanguageId: number;
    Level: number;
  }[];
  selectedLanguages: string[] = [];
  languages: string[] = [
    'JAVA',
    'ANGULAR',
    'REACT',
    'C#',
    'COBOL',
    'NODE',
    'MONGO DB',
    'JS',
  ];

  constructor(
    private router: Router,
    private _employeeServise: EmployeeServise
  ) {}

  ngOnInit(): void {
    this.newEmployeeForm = new FormGroup({
      // ManagerId?:number
      // LanguageForEmployee?:LanguageForEmployee[]

      FirstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      LastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Experience: new FormControl('', [Validators.required]),
      Status: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(1),
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onSelectionLanguage(language: string): void {
    const index = this.selectedLanguages.indexOf(language);
    if (index === -1) {
      this.selectedLanguages.push(language); // Add if not already selected
    } else {
      this.selectedLanguages.splice(index, 1); // Remove if already selected
    }
    console.log('Selected Languages:', this.selectedLanguages);
  }

  

  AddNewEmployee() {
    this.employee = this.newEmployeeForm.value;
    console.log(this.newEmployeeForm.value.firstName);
    console.log('Before:', this.selectedLanguageArr);
    this.setLanguage();
    console.log('After:', this.selectedLanguageArr);
    this.employee.LanguageForEmployee = this.selectedLanguageArr;
    console.log('AddNewEmployee:  ', this.employee);
    // this.route.params.subscribe((parm)=>{
    this._employeeServise.addNewEmployee(this.employee).subscribe({
      next: (res) => {
        this.employee = res;
        //ניווט לעמוד
        console.log(this.employee);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setLanguage() :void{
    console.log("emp::",this.employee)
    
    if (!this.employee) {
      console.error('Employee is not defined.');
      return;
    }

    // Initialize selectedLanguageArr if it's not initialized yet
    if (!this.selectedLanguageArr) {
      this.selectedLanguageArr = [];
    }

    for (let lan of this.selectedLanguages) {
      switch (lan) {
        case 'JAVA':
          this.selectedLanguageArr.push({
            Id: 0,
            IdEmployee: this.employee.Id,
            LanguageId: 1,
            Level: 12,
          });
          break;
        case 'C#':
          this.selectedLanguageArr.push({
            Id: 0,
            IdEmployee: this.employee.Id,
            LanguageId: 1,
            Level: 12,
          });
          break;
        case 'ANGULAR':
          this.selectedLanguageArr.push({
            Id: 0,
            IdEmployee: this.employee.Id,
            LanguageId: 1,
            Level: 12,
          });
          break;
        case 'REACT':
          this.selectedLanguageArr.push({
            Id: 0,
            IdEmployee: this.employee.Id,
            LanguageId: 1,
            Level: 12,
          });
          break;
        case 'COBOL':
          this.selectedLanguageArr.push({
            Id: 0,
            IdEmployee: this.employee.Id,
            LanguageId: 1,
            Level: 12,
          });
          break;
        case 'NODE':
          this.selectedLanguageArr.push({
            Id: 0,
            IdEmployee: this.employee.Id,
            LanguageId: 1,
            Level: 12,
          });
          break;
        case 'MONGO DB':
          this.selectedLanguageArr.push({
            Id: 0,
            IdEmployee: this.employee.Id,
            LanguageId: 1,
            Level: 12,
          });
          break;
        case 'JS':
          this.selectedLanguageArr.push({
            Id: 0,
            IdEmployee: this.employee.Id,
            LanguageId: 1,
            Level: 12,
          });
          break;
        default:
          // במקרה שאין התאמה עבור השפה הנבחרת, ניתן להגדיר פעולת ברירת מחדל או לא לעשות כלום
          break;
      }
    }
  }
}
