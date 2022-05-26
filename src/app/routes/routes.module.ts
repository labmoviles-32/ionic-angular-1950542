import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { AlumnoListaComponent } from '../alumno-lista/alumno-lista.component';
import { AlumnoDetalleComponent } from '../alumno-detalle/alumno-detalle.component';
import { RouterModule, Routes } from '@angular/router';


const rutas: Routes = [
  { path: 'inicio', component: AlumnosComponent },
  { path: 'lista', component: AlumnoListaComponent },
  { path: 'alumno-detalle/:matricula', component: AlumnoDetalleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class RoutesModule { }