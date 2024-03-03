import { Component, OnInit} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  ngOnInit(): void {
    const loginregis = document.querySelector('.loginregis');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');
    const btnpopup = document.querySelector('.popup-login');
    const iconclose = document.querySelector('.close');
    
    registerlink?.addEventListener('click', () => {
      loginregis?.classList.add('active');
    });

    loginlink?.addEventListener('click', () => {
      loginregis?.classList.remove('active');
    });

    btnpopup?.addEventListener('click', () => {
      loginregis?.classList.add('active-popup');
    });

    iconclose?.addEventListener('click', () => {
      loginregis?.classList.remove('active-popup');
    });
  }

  validateForm(): boolean {
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const confirmPassword = (document.getElementById("cpassword") as HTMLInputElement).value;

    if (password !== confirmPassword) {
        alert("Password and confirm password do not match!");
        return false;
    }
    return true;
  }

  togglePassword(field: string, iconId: string) {
    const input = document.getElementById(field) as HTMLInputElement;
    const icon = document.querySelector(`#${iconId}`) as HTMLElement;
 
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fa-solid bi-eye'; // Eye open when password is revealed
    } else {
        input.type = 'password';
        icon.className = 'fa-solid bi-eye-slash'; // Eye closed when password is hidden
    }
}
}
