import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { LoginRequest, LoginResponse } from '../../models/auth.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;
  error: string | null = null;
  success = false;

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.loginForm.get(controlName);
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'Este campo es obligatorio.';
      if (control.errors['email']) return 'Ingresa un correo válido.';
      if (control.errors['minlength']) return `Debe tener al menos ${control.errors['minlength'].requiredLength} caracteres.`;
    }
    return null;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const data: LoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.auth.login(data).subscribe({
      next: (resp: LoginResponse) => {
        this.success = true;
        this.error = null;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.toastr.error('Credenciales incorrectas');
        this.success = false;
        console.error(err);
      }
    });
  }

  goRegister(){
    console.log(" entra")
    this.router.navigate(['/registro']);
  }
}