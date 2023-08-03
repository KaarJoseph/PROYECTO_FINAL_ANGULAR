import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cabecera } from '../domain/cabecera';

@Injectable({
  providedIn: 'root'
})
export class CabecerasService {
  constructor(private http: HttpClient ) { }

  save(cabecera: Cabecera){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/cabeceras", cabecera)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/cabeceras/all")
  }

  delete(cabeceraId: number) {
    console.log(cabeceraId)
    return this.http.delete<any>("http://localhost:8080/proyecto/rs/espacios/elim/"+cabeceraId);
  }
}

