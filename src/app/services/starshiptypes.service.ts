import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { starshiptype } from "../models/starshiptype";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StarshiptypesService {
  API_URI = environment.api_uri;

  constructor(private http: HttpClient) { }

  getStarshiptypes(){
    return this.http.get(`${this.API_URI}/starshiptype`);
  }

  getStarshiptype(id: string|number){
    return this.http.get(`${this.API_URI}/starshiptype/${id}`);
  }

  deleteStarshiptype(id: string){
    return this.http.delete(`${this.API_URI}/starshiptype/${id}`);
  }

  saveStarshiptype(type: starshiptype){
    return this.http.post(`${this.API_URI}/starshiptype`, type);
  }

  updateStarshiptype(id: string|number, type: starshiptype): Observable<starshiptype>{
    return this.http.put(`${this.API_URI}/starshiptype/${id}`, type);
  }
}
