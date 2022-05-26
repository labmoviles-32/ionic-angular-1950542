import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {

  constructor( private db : DatabaseService) { }

  alumnos : any = []
  tester : any = []

  ngOnInit(): void {
    this.db.getListaAlumnos().subscribe(resp => {
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
}