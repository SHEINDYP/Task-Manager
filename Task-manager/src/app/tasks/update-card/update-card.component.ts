import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../model/Task.model';
import { TaskService } from '../../services/Task.service';

@Component({
  selector: 'app-update-card',
  standalone: true,
  imports: [],
  templateUrl: './update-card.component.html',
  styleUrl: './update-card.component.css'
})
export class UpdateCardComponent implements OnInit {

  @Input()
  update!: Task

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.updateTask(this.update.id!, this.update).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
