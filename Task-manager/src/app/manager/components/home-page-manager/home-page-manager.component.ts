import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-home-page-manager',
  templateUrl: './home-page-manager.component.html',
  styleUrl: './home-page-manager.component.css',
})
export class HomePageManagerComponent{
  showFiller = false;
  name = 'noa';

  constructor(private router: Router) {}

  createNewTask() {
    this.router.navigate(['/manager/insert-new-task']);
  }

  createNewEmployee(){
    this.router.navigate(['/manager/add-employee']);
  }
}
