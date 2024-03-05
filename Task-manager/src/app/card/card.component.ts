import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIcon,MatIconModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public readMore=false;

  readMorefun(b:boolean):void{
    this.readMore=b
  }

}
