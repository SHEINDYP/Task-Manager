import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Employee } from '../../../model/Employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/Employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  public newEmployeeForm!: FormGroup;
  public employee!: Employee;
  public selectedLanguageArr!: {
    id: number;
    idEmployee: number;
    languageId: number;
    level: number;
  }[];
  public level_lan!: number;
  public flag_level: boolean = false;
  public flagEmail = false;

  @Output()
  public onChangeData: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router,
    private _employeeService: EmployeeService
  ) { }

  selectedLanguages: { languageName: string; level: number }[] = [];

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

  ngOnInit(): void {
    this.newEmployeeForm = new FormGroup({
      FirstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^.{3,}$'),
      ]),
      LastName: new FormControl('', [
        Validators.required,
        Validators.pattern('^.{3,}$'),
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),

      Experience: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^\d+$/),
      ]),

      Password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[\x21-\x7E]{6,}$/),
      ]),
    });
  }

  onSelectionLanguage(language: string): void {
    const index = this.selectedLanguages.findIndex(
      (item) => item.languageName === language
    );
    if (index === -1) {
      this.selectedLanguages.push({ languageName: language, level: -0 });
    } else {
      this.selectedLanguages.splice(index, 1);
    }
  }

  onEnterLevel(language: string, level: number): void {
    // debugger;
    console.log('this.level_lan', this.level_lan);
    console.log('level', level);
    const index = this.selectedLanguages.findIndex(
      (item) => item.languageName === language
    );
    this.selectedLanguages[index].level = level;
  }

  temp_select_language(language: string) {
    return (
      this.selectedLanguages.findIndex(
        (item) => item.languageName === language
      ) !== -1
    );
  }

  AddNewEmployee() {
    this.employee = this.newEmployeeForm.value;
    this.employee.managerId = parseInt(this._employeeService.currentUserId || '0');
    this.employee.status = 1;
    this.setLanguage();
    console.log('AddNewEmployee:  ', this.employee);
    this._employeeService.addNewEmployee(this.employee).subscribe({
      next: (res) => {
        this.employee = res;
        if (res == null) {
          this.flagEmail = true;
          alert('*Email exist');}
        else
          alert('nice!!');
        console.log(this.employee);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setLanguage(): void {
    if (!this.employee) {
      console.error('Employee is not defined.');
      return;
    }

    // Initialize selectedLanguageArr if it's not initialized yet
    if (!this.selectedLanguageArr) {
      this.selectedLanguageArr = [];
    }

    for (let lan of this.selectedLanguages) {
      switch (lan.languageName) {
        case 'JAVA':
          this.employee.languageInt = {
            ...this.employee.languageInt,
            '1': lan.level,
          };
          break;
        case 'C#':
          this.employee.languageInt = {
            ...this.employee.languageInt,
            '2': lan.level,
          };
          break;
        case 'ANGULAR':
          this.employee.languageInt = {
            ...this.employee.languageInt,
            '3': lan.level,
          };
          break;
        case 'REACT':
          this.employee.languageInt = {
            ...this.employee.languageInt,
            '4': lan.level,
          };
          break;
        case 'COBOL':
          this.employee.languageInt = {
            ...this.employee.languageInt,
            '5': lan.level,
          };
          break;
        case 'NODE':
          this.employee.languageInt = {
            ...this.employee.languageInt,
            '6': lan.level,
          };
          break;
        case 'MONGO DB':
          this.employee.languageInt = {
            ...this.employee.languageInt,
            '7': lan.level,
          };
          break;
        case 'JS':
          this.employee.languageInt = {
            ...this.employee.languageInt,
            '8': lan.level,
          };
          break;
        default:
          break;
      }
    }
  }

  toLogIn() {
    this.onChangeData.emit('logIn');
  }
}
