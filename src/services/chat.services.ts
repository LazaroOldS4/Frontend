import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = `${environment.apiUrl}/Chat`;

  constructor(private http: HttpClient) {}

  enviarMensaje(data: { id_consulta: number, id_receptor: number, mensaje: string }) {
    return this.http.post(`${this.apiUrl}/Iniciar`, data);
  }

  getHistorial(id_consulta: number) {
    return this.http.get(`${this.apiUrl}/${id_consulta}`);
  }

  getChatsActivos(id_usuario: number) {
    return this.http.get(`${this.apiUrl}/usuario/${id_usuario}`);
  }
}