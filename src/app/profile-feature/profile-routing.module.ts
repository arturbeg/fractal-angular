import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent }    from './profile/profile.component';
import { LoginComponent }    from './login/login.component';
import { SignupComponent }    from './signup/signup.component';
import { ChangePasswordComponent }    from './changepassword/changepassword.component';



const profileRoutes: Routes = [
  { path: 'profile/:username', component: ProfileComponent }, // add username later
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }