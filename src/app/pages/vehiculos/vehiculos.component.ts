import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {

  listadoVehiculosWS: any;

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoVehiculosWS = this.vehiculosService.getAll();
  }

  editar(vehiculo: Vehiculo) {
    console.log(vehiculo);
    let params: NavigationExtras = {
      queryParams: {
        vehiculo: vehiculo
      }
    };
    this.router.navigate(['pages/vehiculos/ingreso'], params);
  }

  eliminar(placa: string) {
    this.vehiculosService.delete(placa).subscribe(() => {
      console.log("Vehículo eliminado con éxito.");
      this.ngOnInit();
    });
  }

  nuevo() {
    this.router.navigate(['pages/vehiculos/ingreso']);
  }
}
