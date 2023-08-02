import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient ) { }

  save(persona: Persona){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/clientes", persona)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/clientes/all")
  }

  delete(cedula: String) {
    console.log(cedula)
    return this.http.delete<any>("http://localhost:8080/proyecto/rs/clientes/elim/"+cedula);
  }
}
