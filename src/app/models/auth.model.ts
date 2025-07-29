export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  authToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  authToken: string;
}

export interface Usuario {
  id: number;
  name: string;
  email: string;
}
