import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  onLogin() {
    console.log(this.loginObj);

    if (this.loginObj.username === 'admin' && this.loginObj.password === 'admin') {
      this.router.navigateByUrl('/products')
    }
    else {
      alert('wrong credentials');
    }
  }
}
