import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { membroEsquadrao } from '../models/membroEsquadrao';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MembroEsquadraoService {
  API_URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getMembrosEsquadrao(){
    return this.http.get(`${this.API_URL}/MembroEsquadrao`);
  }

  getMembroEsquadrao(id: String){
    return this.http.get(`${this.API_URL}/MembroEsquadrao/${id}`);
  }

  deleteMembroEsquadrao(cod_personagem:String, cod_esquadrao:String){
    console.log('deletando membro esq service');
    return this.http.delete(`${this.API_URL}/MembroEsquadrao/${cod_personagem},${cod_esquadrao}`);
  }

  saveMembroEsquadrao(membro: membroEsquadrao){
    return this.http.post(`${this.API_URL}/MembroEsquadrao`, membro);
  }

  updateMembroEsquadrao(updateMembroEsquadrao: membroEsquadrao): Observable<membroEsquadrao> {
    return this.http.put(`${this.API_URL}/MembroEsquadrao/${updateMembroEsquadrao.cod_personagem},${updateMembroEsquadrao.cod_esquadrao}`,updateMembroEsquadrao);
  }

}
