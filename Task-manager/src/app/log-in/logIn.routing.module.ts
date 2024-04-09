import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInModule } from './logIn.module';

const logInRoute: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(logInRoute)],
  exports: [RouterModule],
})
export class LogInRoutingModule { }
