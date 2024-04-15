import { HttpClient } from '@angular/common/http';
import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnboardingService } from 'src/app/services/onboarding.service';
export interface userData {
  emailId: string;
  userName: string;
  password: string;
}
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {

  constructor(
    private http: HttpClient,
    private router: Router,
    private register: OnboardingService
  ) {}
  showLogin = false;

  userSignUpForm = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  signUpFormErrors = {
    userNameRequiredError: 'Username is required',
    userNameLengthError: 'Username must be at least 8 characters long',
    emailRequiredError: 'Email is required',
    emailInvalidError: 'Invalid email format',
    passwordRequiredError: 'Password is required',
    passwordLengthError: 'Password must be at least 8 characters long',
    confirmPasswordMismatchError: 'Passwords do not match',
  };
  onSubmit() {

    const { emailId, userName, password } = this.userSignUpForm.value;
    const userData = { emailId, userName, password };

    this.register.registerUser(
      userData.emailId,
      userData.userName,
      userData.password
    );
    this.router.navigate(['/home']);
    localStorage.setItem('username', userData.userName);
  }
  openSignUpForm() {
    this.showLogin = false;
  }
  openLoginForm() {
    this.showLogin = true;
  }
}
