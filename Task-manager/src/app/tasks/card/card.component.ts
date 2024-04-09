import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { Task } from '../../model/Task.model';
import { UpdateCardComponent } from '../update-card/update-card.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, UpdateCardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  public readMore = false;
  public updateCard = false;

  @Input()
  taskDetail!: Task
  public languageName!: string

  readMorefun(b: boolean): void {
    this.readMore = b
  }

  ngOnInit(): void {
    switch (this.taskDetail.languageId) {
      case 1:
        this.languageName = 'JAVA';
        break;
      case 2:
        this.languageName = 'ANGULAR';
        break;
      case 3:
        this.languageName = 'REACT';
        break;
      case 4:
        this.languageName = 'C#';
        break;
      case 5:
        this.languageName = 'COBOL';
        break;
      case 6:
        this.languageName = 'NODE';
        break;
      case 7:
        this.languageName = 'MONGO DB';
        break;
      case 8:
        this.languageName = 'JS';
        break;
      default:
        break;
    }
  }

  updateStatus(e: string) {
    this.taskDetail.status = parseInt(e)
    this.updateCard = true
  }



}
