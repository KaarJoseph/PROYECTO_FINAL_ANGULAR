import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';
import { Vehiculo } from '../domain/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient ) { }

  save(vehiculo: Vehiculo){
    return this.http.post<any>("http://localhost:8080/proyecto/rs/vehiculos", vehiculo)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/proyecto/rs/vehiculos/all")
  }

  delete(placa: String) {
    console.log(placa)
    return this.http.delete<any>("http://localhost:8080/proyecto/rs/vehiculos/elim/"+placa);
  }
}
