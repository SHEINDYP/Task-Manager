import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInModule } from './log-in.module';

const logInRoute: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(logInRoute)],
  exports: [RouterModule],
})
export class LogInRoutingModule {}
