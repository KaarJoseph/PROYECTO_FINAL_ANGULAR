import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cabecera } from 'src/app/domain/cabecera';
import { CabecerasService } from 'src/app/services/cabeceras.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  listadoCabecerasWS: Cabecera[] = [];

  constructor(
    private cabecerasService: CabecerasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cabecerasService.getAll().subscribe((cabeceras: Cabecera[]) => {
      this.listadoCabecerasWS = cabeceras.map(cabecera => {
        cabecera.fechaEmision = new Date(cabecera.fechaEmision);
        return cabecera;
      });
    });
  }

  editar(cabecera: Cabecera) {
    console.log(cabecera);
    let params: NavigationExtras = {
      queryParams: {
        cabecera: cabecera,
        nombre: 'Joseph'
      }
    };
    this.router.navigate(['pages/cabeceras/ingreso'], params);
  }

  eliminar(ticketInt: number) {
    this.cabecerasService.delete(ticketInt).subscribe(() => {
      console.log("Cabecera eliminada con éxito.");
      this.ngOnInit(); // Recargamos la lista después de eliminar
    });
  }

  nuevo() {
    this.router.navigate(['pages/cabeceras/ingreso']);
  }
}
