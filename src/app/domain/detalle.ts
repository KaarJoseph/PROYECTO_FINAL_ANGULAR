import { Cabecera } from "./cabecera";
import { Espacio } from "./espacio";
import { Vehiculo } from "./vehiculo";

export class Detalle {
    detalleId!: number;
    fechaIngreso: Date = new Date();
    fechaSalida: Date = new Date();
    costo: number = 0;
    vehiculo!: Vehiculo;
    espacio!: Espacio;
    cabecera!: Cabecera;
  
    constructor() {
      // Inicializa las fechas de ingreso y salida con la fecha actual
      this.fechaIngreso = new Date();
      this.fechaSalida = new Date();
    }
  }
  