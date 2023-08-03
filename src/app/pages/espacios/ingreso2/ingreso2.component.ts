import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Espacio } from 'src/app/domain/espacio';
import { EspaciosService } from 'src/app/services/espacios.service';

@Component({
  selector: 'app-ingreso2',
  templateUrl: './ingreso2.component.html',
  styleUrls: ['./ingreso2.component.css']
})
export class Ingreso2Component {
  
  espacio: Espacio = new Espacio();

  constructor(
    private espaciosService: EspaciosService,
    private router: Router
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.espacio = new Espacio();
      this.espacio = params['espacio'];
    }
  }

  enviar() {
    console.log(this.espacio);
    if (this.validarEspacio()) {
      this.espaciosService.save(this.espacio).subscribe(data => {
        console.log("Resultado WS save", data);
        this.reloadPage();
      });
    } else {
      alert("Campos inválidos. Por favor, verifica la información ingresada.");
    }
  }

  actualizar() {
    console.log(this.espacio);
    if (this.validarEspacio()) {
      this.espaciosService.save(this.espacio).subscribe(data => {
        console.log("Resultado WS update", data);
        this.router.navigate(["pages/espacios"]);
        //this.reloadPage();
      });
    } else {
      alert("Campos inválidos. Por favor, verifica la información ingresada.");
    }
  }

  reloadPage() {
    window.location.reload();
  }

  validarEspacio(): boolean {
    // Validar que el código y el número de espacio sean números mayores a cero
    if (this.espacio.espacioId <= 0 || this.espacio.numEspacio <= 0) {
      return false;
    }

    // Validar que el costo sea un número mayor o igual a cero
    if (this.espacio.costo < 0) {
      return false;
    }

    // Validar que el estado no esté vacío
    if (this.espacio.estado.trim() === '') {
      return false;
    }

    // Si todas las validaciones pasan, retornar verdadero
    return true;
  }
}
