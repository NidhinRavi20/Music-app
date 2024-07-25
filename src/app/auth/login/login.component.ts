import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  onSubmit() {
    const storedPassword = localStorage.getItem(this.email);
    if (storedPassword === this.password) {
      localStorage.setItem('loggedInUser', this.email);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid login credentials');
    }
  }
}