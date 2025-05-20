import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class PatientsService {
  private apiUrl = `${environment.apiUrl}/Paciente`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}/Pacientes`);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  update(id: number, data: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}