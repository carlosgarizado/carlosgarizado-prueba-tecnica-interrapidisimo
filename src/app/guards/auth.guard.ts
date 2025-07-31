
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
;

import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return true; 
    }
  
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.toastr.warning('Debes iniciar sesión para acceder a esta página', 'Acceso restringido');
      this.router.navigate(['/login']);
      return false;
    }
  
    return true;
  }
  
}

