import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IngresoComponent } from './pages/clientes/ingreso/ingreso.component';
import { Ingreso1Component } from './pages/vehiculos/ingreso1/ingreso1.component';
import { Ingreso2Component } from './pages/espacios/ingreso2/ingreso2.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/inicio', pathMatch: 'full' },
  {path:"pages/inicio",component: InicioComponent},
  {path:"pages/clientes",component: ClientesComponent},
  {path:"pages/vehiculos",component: VehiculosComponent},
  {path:"pages/espacios",component: EspaciosComponent},
  {path:"pages/facturas",component: FacturasComponent},
  {path:"pages/detalles",component: DetallesComponent},
  {path:"pages/clientes/ingreso",component: IngresoComponent},
  {path:"pages/vehiculos/ingreso",component: Ingreso1Component},
  {path:"pages/espacios/ingreso",component: Ingreso2Component},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
