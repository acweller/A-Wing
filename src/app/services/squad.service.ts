import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Squad } from '../models/squad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SquadService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getSquads() {
    return this.http.get(`${this.API_URI}/squad`);
  }

  getSquad(id: string) {
    return this.http.get(`${this.API_URI}/squad/${id}`);
  }

  deleteSquad(id: string) {
    return this.http.delete(`${this.API_URI}/squad/${id}`);
  }

  saveSquad(squad: Squad) {
    return this.http.post(`${this.API_URI}/squad`, squad);
  }

  updateSquad(cod_esquadrao: string|number, updateSquad: Squad): Observable<Squad> {
    return this.http.put(`${this.API_URI}/squad/${cod_esquadrao}`, updateSquad);
  }

}
