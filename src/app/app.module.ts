import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecetaComponent } from './components/receta/receta.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PasosComponent } from './components/pasos/pasos.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { DataTablesModule } from 'angular-datatables';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    NavbarComponent,
    PasosComponent,
    IngredientesComponent,
    BusquedaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
