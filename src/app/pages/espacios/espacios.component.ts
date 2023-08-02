import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Espacio } from 'src/app/domain/espacio';
import { EspaciosService } from 'src/app/services/espacios.service';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent {

  listadoEspaciosWS: any;

  constructor(
    private espaciosService: EspaciosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoEspaciosWS = this.espaciosService.getAll();
  }

  editar(espacio: Espacio) {
    console.log(espacio);
    let params: NavigationExtras = {
      queryParams: {
        espacio: espacio
      }
    };
    this.router.navigate(['pages/espacios/ingreso'], params);
  }

  eliminar(espacioId: number) {
    this.espaciosService.delete(espacioId).subscribe(() => {
      console.log("Espacio eliminado con éxito.");
      this.ngOnInit();
    });
  }

  nuevo() {
    this.router.navigate(['pages/espacios/ingreso']);
  }
}
