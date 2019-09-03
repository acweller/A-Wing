import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Squad } from '../models/squad';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SquadService {
  API_URI = environment.api_uri;

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

  updateSquad(codEsquadrao: string|number, updateSquad: Squad): Observable<Squad> {
    return this.http.put(`${this.API_URI}/squad/${codEsquadrao}`, updateSquad);
  }

}
