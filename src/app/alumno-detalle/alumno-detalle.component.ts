import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAlumnoDetalle(this.matricula);
  }

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

  alumnoDetalle: any = {}

  matricula: string = this.ruta.snapshot.params['matricula'];
  getAlumnoDetalle(matricula: string): any {

    for(let i = 0; i < this.alumnos.length; i++){ //Ciclo buscar alumno por matricula
      if(this.alumnos[i].matricula == this.matricula) { //valida si la matricula coincide con el alumno
        this.alumnoDetalle = this.alumnos[i]; // asignar alumno a alumno detlle
      }
    }

    return this.alumnoDetalle;
  }

}
