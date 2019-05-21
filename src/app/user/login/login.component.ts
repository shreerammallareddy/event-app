import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(loginForm){
    console.log(loginForm);
    this.authService.loginUser(loginForm.username,loginForm.password);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }

}
