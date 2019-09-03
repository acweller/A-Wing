import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MembroEsquadrao } from '../models/membroEsquadrao';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MembroEsquadraoService {
  API_URI = environment.api_uri;

  constructor(private http: HttpClient) { }

  getMembrosEsquadrao() {
    return this.http.get(`${this.API_URI}/MembroEsquadrao`);
  }

  getMembroEsquadrao(id: string) {
    return this.http.get(`${this.API_URI}/MembroEsquadrao/${id}`);
  }

  deleteMembroEsquadrao(codPersonagem: string, codEsquadrao: string) {
    console.log('deletando membro esq service');
    return this.http.delete(`${this.API_URI}/MembroEsquadrao/${codPersonagem},${codEsquadrao}`);
  }

  saveMembroEsquadrao(membro: MembroEsquadrao) {
    return this.http.post(`${this.API_URI}/MembroEsquadrao`, membro);
  }

  updateMembroEsquadrao(updateMembroEsquadrao: MembroEsquadrao): Observable<MembroEsquadrao> {
    return this.http.put(`${this.API_URI}/MembroEsquadrao/${updateMembroEsquadrao.cod_personagem},
    ${updateMembroEsquadrao.cod_esquadrao}`, updateMembroEsquadrao);
  }

}
