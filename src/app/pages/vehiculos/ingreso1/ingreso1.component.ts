import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-ingreso1',
  templateUrl: './ingreso1.component.html',
  styleUrls: ['./ingreso1.component.css']
})
export class Ingreso1Component {

  vehiculo: Vehiculo = new Vehiculo();

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.vehiculo = new Vehiculo();
      this.vehiculo = params['vehiculo'];
    }
  }

  enviar() {
    console.log(this.vehiculo);
    if (!isNaN(Number(this.vehiculo.propietario.cedula)) && this.vehiculo.propietario.cedula.length === 10) {
      this.vehiculosService.save(this.vehiculo).subscribe(data => {
        console.log("Resultado WS save", data);
        this.reloadPage();
      });
    } else {
      alert("Nro. Cedula Incorrecta");
    }
  }

  actualizar() {
    console.log(this.vehiculo);
    if (!isNaN(Number(this.vehiculo.propietario.cedula)) && this.vehiculo.propietario.cedula.length === 10) {
      this.vehiculosService.save(this.vehiculo).subscribe(data => {
        console.log("Resultado WS update", data);
        this.router.navigate(["pages/vehiculos"]);
        //this.reloadPage();
      });
    } else {
      alert("Nro. Cedula Incorrecta");
    }
  }

  reloadPage() {
    window.location.reload();
  }
}
