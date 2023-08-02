import { Component } from '@angular/core';
import { Persona } from 'src/app/domain/persona';
import { PersonasService } from 'src/app/services/personas.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  listadoPersonasWS: any;

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoPersonasWS = this.personasService.getAll();
  }

  editar(persona: Persona) {
    console.log(Persona);
    let params: NavigationExtras = {
      queryParams: {
        persona: persona,
        nombre: 'Joseph'
      }
    };
    this.router.navigate(['pages/clientes/ingreso'], params);
  }

  eliminar(cedula: string) {
    if (!isNaN(Number(cedula)) && cedula.length === 10) {
    this.personasService.delete(cedula).subscribe(() => {
      console.log("Persona eliminada con éxito.");
      this.ngOnInit()
    });
    console.log(cedula);
    this.reloadPage();
    }else {
      alert("Nro. Cedula Incorrecta")
    }
  }

  nuevo() {
    this.router.navigate(['pages/clientes/ingreso']);
  }

  reloadPage() {
    window.location.reload();
  }
}
