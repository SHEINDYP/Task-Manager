import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },

  {
    path: 'manager',
    loadChildren: () =>
      import('./manager/manager.module').then((m) => m.ManagerModule)
  },

  {
    path: 'logIn',
    loadChildren: () =>
      import('./log-in/logIn.module').then((m) => m.LogInModule)
  },

  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule)
  },
  {
    path: 'homepage',
    component: SideBarComponent
  },

];
