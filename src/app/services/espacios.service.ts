import { Injectable } from '@angular/core';
import { Espacio } from '../domain/espacio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {

  constructor(private http: HttpClient ) { }

  save(espacio: Espacio){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/espacios", espacio)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/espacios/all")
  }

  delete(espacioId: number) {
    console.log(espacioId)
    return this.http.delete<any>("http://localhost:8080/proyecto/rs/espacios/elim/"+espacioId);
  }
}
