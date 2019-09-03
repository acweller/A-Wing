import { Personagem } from './../models/Personagem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PersonagemService {
  API_URI = environment.api_uri;

  constructor(private http: HttpClient) { }

  getPersonagem() {
    return this.http.get(`${this.API_URI}/personagens`);
  }

  getUm(codPersonagem: string) {
    return this.http.get(`${this.API_URI}/personagens/${codPersonagem}`);
  }

  deletePersonagem(codPersonagem: string) {
    return this.http.delete(`${this.API_URI}/personagens/${codPersonagem}`);
  }

  savePersonagem(personagem: Personagem) {
    return this.http.post(`${this.API_URI}/personagens`, personagem);
  }

  updatePersonagem(codPersonagem: string|number, updatedPersonagem: Personagem): Observable<Personagem>  {
    return this.http.put(`${this.API_URI}/personagens/${codPersonagem}`, updatedPersonagem);
  }

}
