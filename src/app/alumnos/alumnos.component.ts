import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre": "CLAUDIA YULIANA ", 
      "apellido": "MARES RODRÍGUEZ", 
      "matricula": "cymrcymr"
    },
    {
      "nombre": "SAMUEL", 
      "apellido": "SALAZAR LEAL", 
      "matricula": "sslssl"
    },
    
    {
      "nombre": "ALONDRA BERENISE", 
      "apellido": "ZAMORA MORENO", 
      "matricula": "abzmabzm"
    },
    {
      "nombre": "IVAN MARCELO", 
      "apellido": " RAMIREZ HNILICKA", 
      "matricula": "imrhimrh"
    },
    {
      "nombre": "RODRIGO ANTONIO", 
      "apellido": "MARTINEZ MACIAS", 
      "matricula": "rammramm"
    },
    {
      "nombre": "MANUEL FERNANDO", 
      "apellido": "RIVERA DE LEON", 
      "matricula": "mfrlmfrl"
    },
    {
      "nombre": "LUIS CARLOS", 
      "apellido": "HERNANDEZ RIVERA", 
      "matricula": "lchrlchr"
    },
    {
      "nombre": "SAUL", 
      "apellido": "DAVILA GONZALEZ", 
      "matricula": "sdgsdg"
    },
    {
      "nombre": "SANTIAGO ELIAM", 
      "apellido": "RAMIREZ GARCIA", 
      "matricula": "sergserg"
    },
    {
      "nombre": "MIGUEL ANGEL", 
      "apellido": "SANCHEZ CARRILLO", 
      "matricula": "mascmasc"
    },
    {
      "nombre": "JOSE ANTONIO", 
      "apellido": "CANO JARAMILLO", 
      "matricula": "jacjjacj"
    },
    {
      "nombre": "JUAN FRANCISCO", 
      "apellido": "LOPEZ BARRIENTOS", 
      "matricula": "jflbjflb"
    },
    {
      "nombre": "MIGUEL GIOVANNY", 
      "apellido": "VARGAS CANTU", 
      "matricula": "mgvcmgcv"
    },
    {
      "nombre": "ALEJANDRO", 
      "apellido": "BELTRAN ALVARADO", 
      "matricula": "abaaba"
    },
    {
      "nombre": "RICARDO ", 
      "apellido": "HERRERA ROMERO", 
      "matricula": "rhmrhm"
    }, 
    {
      "nombre": "CRISTHIAN IOANNE ANGEL", 
      "apellido": "JUAREZ TOBIAS", 
      "matricula": "ciajtciajt"
    }
  ]

  ngOnInit(): void {
  }


  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";


  hola: string = "hola mundo";

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
