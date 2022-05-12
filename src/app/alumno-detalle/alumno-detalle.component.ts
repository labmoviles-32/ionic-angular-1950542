import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    //this.getAlumnoDetalle(this.matricula);
    this.getAlumnoDetalle(this.id).subscribe(res=> {
      this.alumnoDetalle = res ;
    })
  }

  alumnoDetalle: any = {}
  id: number = this.ruta.snapshot.params['index'];
  
  getAlumnoDetalle(id: number) {
    return this.http.get ('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos/'+ id +'.json')
  }
  

 /* matricula: string = this.ruta.snapshot.params['matricula'];
  getAlumnoDetalle(matricula: string): any {

    for(let i = 0; i < this.alumnos.length; i++){ //Ciclo buscar alumno por matricula
      if(this.alumnos[i].matricula == this.matricula) { //valida si la matricula coincide con el alumno
        this.alumnoDetalle = this.alumnos[i]; // asignar alumno a alumno detlle
      }
    }

    return this.alumnoDetalle;
  }
*/
}