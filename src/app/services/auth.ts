import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse, User } from '../models/auth.model';
import { Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly API_URL = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private setItem(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }

  private getItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, data).pipe(
      tap((resp) => {
        if (resp.authToken) {
          this.setItem('authToken', resp.authToken);
        }
      })
    );
  }

  signup(data: SignupRequest): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.API_URL}/auth/signup`, data).pipe(
      tap((resp) => {
        if (resp.authToken) {
          this.setItem('authToken', resp.authToken);
        }
      })
    );
  }

  getUser(): Observable<User> {
    const token = this.getItem('authToken');
    return this.http.get<User>(`${this.API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  logout(): void {
    this.removeItem('authToken');
  }

  getToken(): string | null {
    return this.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}