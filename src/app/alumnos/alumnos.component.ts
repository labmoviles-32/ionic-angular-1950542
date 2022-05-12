import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  alumnos: any = [];

  ngOnInit(): void {
    this.getAlumnos().subscribe(res=> {
      console.log(res);
      this.alumnos = res;
    })
  }


  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";


  hola: string = "hola mundo";


  getAlumnos(){
    //hacer solicitud http para obtener lista de alumnos
    return this.http.get('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos.json')
    }
  
  like(): void{
    //dar like a este elemento
    console.log("like!");
  }

  agregarAlumno(): void {
    var nuevoAlumno: any = {
      "nombre": this.nombreAlumno,
      "apellido": this.apellidoAlumno,
      "matricula": this.matriculaAlumno
    }

    //console.log(nuevoAlumno);

    this.alumnos.push(nuevoAlumno); //Funcion en TypeScript 
  }
}
