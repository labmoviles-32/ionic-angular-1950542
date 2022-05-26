import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {

  constructor( private db : DatabaseService) { }

  tester : any = []
  lista : Alumno[] = [];
  filtro : string = '';

  ngOnInit(): void {
    this.db.getListaAlumnos().subscribe(resp => {
      console.log(resp);
      this.tester = Object.values(resp);
      console.log(this.tester);
      for (let test of this.tester){
        if(test != null){
          this.lista = this.lista.concat(test);
        }
      }
      console.log(this.lista);
    })
  }

  delete(obj : Object){
    console.log("Opción borrar");
    console.log(obj);
    console.log(Object.values(obj)[1]);

    this.db.getAlumnoDetalle(Object.values(obj)[1]).subscribe(resp => {
      console.log(resp);
      console.log(Object.keys(resp).toString());

      let name = Object.keys(resp).toString();
      this.db.deleteAlumno(name).subscribe(delresp => {
        console.log(delresp);
        if(delresp == null){
          console.log('Se borro algo....');
          window.location.reload();
        }else{
          console.log('Error al borrar');
        }
      });
    });
  }
}