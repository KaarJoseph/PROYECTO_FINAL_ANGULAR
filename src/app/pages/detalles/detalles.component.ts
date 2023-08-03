import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Detalle } from 'src/app/domain/detalle';
import { DetallesService } from 'src/app/services/detalles.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  listadoDetalleWS: any;

  constructor(
    private detallesService: DetallesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoDetalleWS = this.detallesService.getAll();
  }

  editar(detalle: Detalle) {
    console.log(Detalle);
    let params: NavigationExtras = {
      queryParams: {
        ticket: Detalle,
        nombre: 'Joseph'
      }
    };
    this.router.navigate(['ticket'], params);
  }

  eliminar(detalleId: number) {
    if (!isNaN(detalleId)) {
      this.detallesService.delete(detalleId).subscribe(() => {
        console.log("detalle eliminado con éxito.");
        this.ngOnInit();
      });
      console.log(detalleId);
      this.reloadPage();
    } else {
      alert("Nro. Cedula Incorrecta");
    }
  }

  nuevo() {
    this.router.navigate(['']);
  }

  reloadPage() {
    window.location.reload();
  }
}