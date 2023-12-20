import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
showLogin = false;

  userSignUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    username: new FormControl('')
  });

  onSubmit(){
    console.warn(this.userSignUpForm.value);
  }
  openSignUpForm() {
    this.showLogin = false;
  }
  openLoginForm() {
    this.showLogin = true;
  }
}
