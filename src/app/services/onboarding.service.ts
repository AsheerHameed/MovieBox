import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  constructor(private http: HttpClient) {}

  registerUser(emailId: string, userName: string, password: string) {
    const userData = { emailId,userName, password };

    this.http
      .post('http://localhost:5000/user/register', userData)
      .subscribe((res: typeof userData) => {
        console.log('Response', res);
        console.log('userName', userData.userName);
        console.log('password', userData.password);
        console.log('emailId', userData.emailId);



        localStorage.setItem('username', userData.userName);
      });
  }

  // getRegistereduserDetails(userName: string, password: string) {
  //   const userData = {  userName,password };

  //   this.http.get('http://localhost:5000/user/register')
  //   console.log(this.getRegistereduserDetails(userData.userName,userData.password));

  // }
}
