import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent {
  loginForm: FormGroup;
  error = false;
  

  // Datos quemados para el inicio de sesión (correo y contraseña)
  usuarios = [
    { email: 'usuario1@example.com', password: '123456' },
    { email: 'usuario2@example.com', password: 'abcdef' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email');
      const password = this.loginForm.get('password');

     
    }
  }
}
