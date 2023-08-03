import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detalle } from '../domain/detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(private http: HttpClient ) { }

  save(detalle: Detalle){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/detalles", detalle)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/detalles/all")
  }

  delete(detalleId: number) {
    console.log(detalleId)
    return this.http.delete<any>("http://localhost:8080/proyecto/rs/detalles/elim/"+detalleId);
  }
}


