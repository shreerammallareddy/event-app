/**
 * import { BrowserModule } from '@angular/platform-browser'; --> This browser module is used in app module instead we import 
 * CommonModule for feature based angular modules --> also called Lazy loadable module i.e., loads only when called
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
        ],
  providers: [],
  bootstrap: []
})
export class UserModule {}