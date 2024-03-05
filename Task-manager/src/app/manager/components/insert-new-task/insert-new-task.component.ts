import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServise } from '../../../servises/Task.servise';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../model/Task.model';

@Component({
  selector: 'app-insert-new-task',
  templateUrl: './insert-new-task.component.html',
  styleUrl: './insert-new-task.component.css',
})
export class InsertNewTaskComponent implements OnInit {
  public newTaskForm!: FormGroup;
  public task!: Task;
  public lanId!: number;
  public selectedLanguage!:string
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

  constructor(private router: Router, private _taskServise: TaskServise) {}
  ngOnInit(): void {
    this.newTaskForm = new FormGroup({
      Title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      Description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      Level: new FormControl('', [Validators.required]),
      DeadLine: new FormControl('', [Validators.required]), //Validators.date
    });
  }

  onSelectionLanguage(language: string): void {
    this.selectedLanguage=language

    switch (language) {
      case 'JAVA':
        this.lanId = 1;
        break;
      case 'ANGULAR':
        this.lanId = 2;
        break;
      case 'REACT':
        this.lanId = 3;
        break;
      case 'C#':
        this.lanId = 4;
        break;
      case 'COBOL':
        this.lanId = 5;
        break;
      case 'NODE':
        this.lanId = 6;
        break;
      case 'MONGO DB':
        this.lanId = 7;
        break;
      case 'JS':
        this.lanId = 8;
        break;
      default:
        break;
    }

    console.log(
      'Selected Option:',
      language,
      '\nthis.task.LanguageId :',
      this.task.LanguageId
    );
  }

  addNewTask():void {
    //האלגוריתם ההונגרי!!!
    this.task = this.newTaskForm.value;
    this.task.LanguageId = this.lanId;
    this.task.EmployeeId = 1;
    this.task.Status = 0;
    this.task.Id = 0;
    this.task.DeadLine = "2024-03-04T13:53:26.033Z";
    console.log('task: ', this.task);

    this._taskServise.insertTask(this.task).subscribe({
      next: (res) => {
        this.task = res;
        //מודל של התווספה משימה חדשה ושובצה
        alert("add new task :)")
        console.log("res: ",this.task);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}


// DeadLine
// : 
// "0001-11-11"
// Description
// : 
// "111"
// EmployeeId
// : 
// 12
// LanguageId
// : 
// 7
// Level
// : 
// 11
// Status
// : 
// 0
// Title
// : 
// "11"

