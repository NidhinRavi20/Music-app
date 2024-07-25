import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  signupUser : any[] = [];
  loginUser : any[] = []
  signupObj :any = {
    userName : '',
    email : '',
    password : ''
  };
  
  loginObj : any = {
    userName : '',
    password : ''
  };

  constructor(private router : Router) { }

  ngOnInit(): void {

    const localData = localStorage.getItem('signupUser');
    if(localData != null){
      this.signupUser = JSON.parse(localData);
    }

  }

  onSignup(){
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
    this.signupObj = {
      userName : '',
      email : '',
      password : ''
    };
  }

  onLogin(){

    const isUserExist = this.signupUser.find( m => m.email == this.loginObj.email && m.password == this.loginObj.password)
    if(isUserExist != undefined){
      alert('User login successfully');
      this.router.navigate(['/top10'])
      this.loginUser.push(this.loginObj);
    localStorage.setItem('loginUser', JSON.stringify(this.loginUser));
    this.loginObj = {
      email : '',
      password : ''
    };
    }else{
      alert('Wrong credentials');
    }
  }
}