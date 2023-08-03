import { Detalle } from "./detalle";
import { Persona } from "./persona";

export class Cabecera {
    ticketInt: number = 0;
    numTicket: string = '';
    fechaEmision: Date = new Date();
    costoTotal: number = 0;
    estado: string = '';
    propietarioCabecera: Persona = new Persona();
    detallesFacturaVisible: boolean = false; // Agrega esta propiedad
    detallesFactura: Detalle[] = []; // Agrega esta propiedad
  
    constructor() {
      // Inicializa la fecha de emisión con la fecha actual
      this.fechaEmision = new Date();
      // Inicializa el propietarioCabecera como una nueva instancia de Persona
      this.propietarioCabecera = new Persona();
    }
  }
  