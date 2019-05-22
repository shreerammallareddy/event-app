import { Injectable } from '@angular/core';
import { IUser } from './models/user.model';

/**
 * We will be importing AuthService in providers in app.module instead of user module
 * because we want the app module to be accessible across the app so importing in app module
 * will make it available in entire application.
 * But this is not true in case of Components. Components need to be imported in that local module
 * whereever being used
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:IUser;
  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id:1,
      userName:'uname',
      firstName:'UserFname',
      lastName:'UserLname'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateProfile(firstName:string, lastName:string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
