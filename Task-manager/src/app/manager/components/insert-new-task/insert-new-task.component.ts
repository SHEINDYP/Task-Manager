import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../../services/Task.service';
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
  public selectedLanguage!: string
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

  constructor(private router: Router, private _taskService: TaskService) { }
  ngOnInit(): void {
    this.newTaskForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.pattern('^.{3,}$'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern('^.{3,}$'),
      ]),
      level: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
      deadLine: new FormControl('', [Validators.required,]), // add Validators.date 
    });
  }

  onSelectionLanguage(language: string): void {
    this.selectedLanguage = language

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
      this.task.languageId
    );
  }

  addNewTask(): void {
    this.task = this.newTaskForm.value;
    this.task.languageId = this.lanId;
    this.task.status = 0;

    this._taskService.insertTask(this.task).subscribe({
      next: (res) => {
        this.task = res;
        alert("add new task :)")
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}


