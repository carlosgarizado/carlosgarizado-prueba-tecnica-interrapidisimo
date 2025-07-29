import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { SignupRequest } from '../../models/auth.model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  registerForm: FormGroup;
  error: string | null = null;
  success = false;

  constructor(private fb: FormBuilder, private auth: Auth, private toastr: ToastrService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.registerForm.get(controlName);
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'Este campo es obligatorio.';
      if (control.errors['email']) return 'Ingresa un correo válido.';
      if (control.errors['minlength']) return `Debe tener al menos ${control.errors['minlength'].requiredLength} caracteres.`;
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const data: SignupRequest = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.auth.signup(data).subscribe({
      next: () => {
        this.success = true;
        this.error = null;
        this.registerForm.reset();
        this.toastr.success('Datos guardados correctamente', 'Éxito');
      },
      error: (err) => {
        this.success = false;
        this.toastr.error('Error al guardar datos');
        console.error(err);
      },
    });
  }
}