import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cabecera } from 'src/app/domain/cabecera';
import { Detalle } from 'src/app/domain/detalle';
import { CabecerasService } from 'src/app/services/cabeceras.service';
import { DetallesService } from 'src/app/services/detalles.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
  listadoCabecerasWS: Cabecera[];
  listadoDetallesWS: Detalle[];
  detallesVisible: boolean = false;

  constructor(
    private cabecerasService: CabecerasService,
    private detallesService: DetallesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cabecerasService.getAllCabeceras().subscribe(
      (cabeceras: Cabecera[]) => {
        this.listadoCabecerasWS = cabeceras;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  nuevoCabecera() {
    // Implementa la lógica para agregar una nueva cabecera
  }

  eliminarCabecera(ticketInt: number) {
    // Implementa la lógica para eliminar una cabecera
  }

  editarCabecera(cabecera: Cabecera) {
    // Implementa la lógica para editar una cabecera
  }

  toggleDetalles(cabecera: Cabecera) {
    if (!this.detallesVisible) {
      this.detallesService.getByCabeceraId(cabecera.ticketInt).subscribe(
        (detalles: Detalle[]) => {
          this.listadoDetallesWS = detalles;
          this.detallesVisible = true;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.listadoDetallesWS = [];
      this.detallesVisible = false;
    }
  }

  nuevoDetalle() {
    // Implementa
  }
}