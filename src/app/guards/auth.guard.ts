import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private router: Router,  private toastr: ToastrService) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');

    if (!token) {
        this.toastr.warning('Debes iniciar sesión para acceder a esta página', 'Acceso restringido', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
