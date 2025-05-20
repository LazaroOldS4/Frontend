import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/Usuario`;

  constructor(private http: HttpClient) {}

  login(data: { Email: string, Password: string }) {
    return this.http.post(`${this.apiUrl}/IniciarSesion`, data);
  }

  registerPaciente(data: any) {
    return this.http.post(`${this.apiUrl}/Registrar`, { ...data, id_rol: 3 });
  }

  registerDoctor(data: any) {
    return this.http.post(`${this.apiUrl}/Registrar/admin`, { ...data, id_rol: 2 });
  }

  getProfile(id: number) {
    return this.http.get(`${this.apiUrl}/usuarios/${id}`);
  }
}