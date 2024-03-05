import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'logIn',
    loadChildren: () =>
      import('./log-in/log-in.module').then((l) => l.LogInModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./manager/manager.module').then((m) => m.ManagerModule),
  },
{
  path: 'employee',
  loadChildren: () =>
    import('./employee/employee.module').then((m) => m.EmployeeModule),
},

];
