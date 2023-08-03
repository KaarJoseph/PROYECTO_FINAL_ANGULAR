export class Cabecera {
    ticketInt: number = 0;
    numTicket: string = '';
    fechaEmision: Date = new Date();
    costoTotal: number = 0;
    estado: string = '';
    propietarioCabecera: Persona = new Persona();
  }
  
  export class Persona {
    cedula: string = '';
    nombre: string = '';
    direccion: string = '';
  }