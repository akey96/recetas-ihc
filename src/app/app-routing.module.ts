import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetaComponent } from './components/receta/receta.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'receta/:id', component: RecetaComponent },
  { path: 'busqueda', component: BusquedaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
