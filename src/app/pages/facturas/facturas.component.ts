import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cabecera } from 'src/app/domain/cabecera';
import { CabecerasService } from 'src/app/services/cabeceras.service';
import { Detalle } from 'src/app/domain/detalle';
import { DetallesService } from 'src/app/services/detalles.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  listadoFacturasWS: Cabecera[] = [];

  constructor(
    private router: Router,
    private cabecerasService: CabecerasService,
    private detallesService: DetallesService
  ) {}

  ngOnInit() {
    this.cargarListadoFacturas();
  }

  cargarListadoFacturas() {
    this.cabecerasService.getAllCabeceras().subscribe(
      (facturas: Cabecera[]) => {
        this.listadoFacturasWS = facturas;
      },
      (error) => {
        console.error('Error al cargar el listado de facturas', error);
      }
    );
  }

  verDetalles(factura: Cabecera) {
    if (factura.detallesFacturaVisible) {
      factura.detallesFacturaVisible = false;
    } else {
      this.detallesService.getByCabeceraId(factura.ticketInt).subscribe(
        (detalles: Detalle[]) => {
          factura.detallesFactura = detalles;
          factura.detallesFacturaVisible = true;
        },
        (error) => {
          console.error('Error al obtener detalles de factura', error);
        }
      );
    }
  }
}
