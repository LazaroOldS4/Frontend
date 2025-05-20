import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ConsultasService {
  private apiUrl = `${environment.apiUrl}/Consulta`;

  constructor(private http: HttpClient) {}

  crearConsulta(data: any) {
    return this.http.post(`${this.apiUrl}/crear`, data);
  }

  actualizarEstado(id: number, estado: string) {
    return this.http.patch(`${this.apiUrl}/${id}`, { estado });
  }

  getPorPaciente() {
    return this.http.get(`${this.apiUrl}/paciente`);
  }

  getPorDoctor() {
    return this.http.get(`${this.apiUrl}/doctor`);
  }
}