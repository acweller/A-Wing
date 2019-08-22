import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { membroEsquadrao } from '../models/membroEsquadrao';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MembroEsquadraoService {
  API_URI = environment.api_uri;

  constructor(private http: HttpClient) { }

  getMembrosEsquadrao(){
    return this.http.get(`${this.API_URI}/MembroEsquadrao`);
  }

  getMembroEsquadrao(id: String){
    return this.http.get(`${this.API_URI}/MembroEsquadrao/${id}`);
  }

  deleteMembroEsquadrao(cod_personagem:String, cod_esquadrao:String){
    console.log('deletando membro esq service');
    return this.http.delete(`${this.API_URI}/MembroEsquadrao/${cod_personagem},${cod_esquadrao}`);
  }

  saveMembroEsquadrao(membro: membroEsquadrao){
    return this.http.post(`${this.API_URI}/MembroEsquadrao`, membro);
  }

  updateMembroEsquadrao(updateMembroEsquadrao: membroEsquadrao): Observable<membroEsquadrao> {
    return this.http.put(`${this.API_URI}/MembroEsquadrao/${updateMembroEsquadrao.cod_personagem},${updateMembroEsquadrao.cod_esquadrao}`,updateMembroEsquadrao);
  }

}
