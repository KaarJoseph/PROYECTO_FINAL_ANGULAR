import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {
  
  persona: Persona = new Persona();

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.persona = new Persona();
      this.persona = params['persona'];
    }
  }

  enviar() {
    console.log(this.persona);
    if (!isNaN(Number(this.persona.cedula)) && this.persona.cedula.length === 10) {

    this.personasService.save(this.persona).subscribe(data => {
      console.log("Resultado WS save", data);
      this.reloadPage();
    });
  }else{
    alert("Nro. Cedula Incorrecta")
  }
  }

  actualizar() {
    console.log(this.persona);
    if (!isNaN(Number(this.persona.cedula)) && this.persona.cedula.length === 10) {
    this.personasService.save(this.persona).subscribe(data => {
      console.log("Resultado WS update", data);
      this.router.navigate(["pages/clientes"])
      //this.reloadPage();
    });
  }else{
    alert("Nro. Cedula Incorrecta")
  }
  }

  reloadPage() {
    window.location.reload();
  }
}