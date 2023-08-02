import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IngresoComponent } from './pages/clientes/ingreso/ingreso.component';
import { Ingreso1Component } from './pages/vehiculos/ingreso1/ingreso1.component';
import { Ingreso2Component } from './pages/espacios/ingreso2/ingreso2.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    ClientesComponent,
    VehiculosComponent,
    EspaciosComponent,
    FacturasComponent,
    InicioComponent,
    IngresoComponent,
    Ingreso1Component,
    Ingreso2Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
