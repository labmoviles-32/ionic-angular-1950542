import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {

  constructor( private bd : DatabaseService) { }

  tester : any = []
  alumnos: any = []
  filtro : string = '';

  ngOnInit(): void {
    this.bd.getListaAlumnos().subscribe(resp => {
      console.log(Object.values(resp));
      this.tester = Object.values(resp);
      console.log(this.alumnos);
      for (let test of this.tester)
      {
        if(test != null)
        {
         this.alumnos.push(test);
        }
      }
    })
  }

  delete(obj : Object){
    console.log("Opción borrar");
    console.log(obj);
    console.log(Object.values(obj)[1]);

    this.bd.getAlumnoDetalle(Object.values(obj)[1]).subscribe(resp => {
      console.log(resp);
      console.log(Object.keys(resp).toString());

      let name = Object.keys(resp).toString();
      this.bd.deleteAlumno(name).subscribe(delresp => {
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