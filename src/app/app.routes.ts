import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    canActivate: [AuthGuard],
  },
  {
    path: 'registro',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
];
