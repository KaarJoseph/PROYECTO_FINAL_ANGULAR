export class Vehiculo {
    placa: string = '';
    marca: string = '';
    modelo: string = '';
    tipo: string = '';
    propietario: Persona = new Persona();
  }
  
  export class Persona {
    cedula: string = '';
    nombre: string = '';
    direccion: string = '';
  }
  