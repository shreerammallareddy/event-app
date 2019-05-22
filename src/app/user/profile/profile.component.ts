import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  firstName: FormControl;
  lastName: FormControl;
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }
/**
 * profileForm.controls.firstName.errors.required -> this checks for Validators.required condition
 * profileForm.controls.firstName.errors.pattern -> this checks for Validators.pattern(..) condition
 */
  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  validateFirstName(){
    console.log("invalid:"+this.firstName.invalid)
    // console.log("touched:"+this.firstName.touched)
    return this.firstName.valid || this.firstName.untouched
  }


  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }

  saveProfile(profileForm) {
    if (this.profileForm.valid) {
      this.authService.updateProfile(profileForm.firstName, profileForm.lastName);
      this.router.navigate(['events']);
    }

  }

  cancel() {
    this.router.navigate(['events']);
  }

}
