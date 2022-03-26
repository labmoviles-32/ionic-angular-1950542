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
      "nombre": "IVAN MARCELO", 
      "apellido": " RAMIREZ HNILICKA", 
      "matricula": "gffdfgdfg"
    },
    {
      "nombre": "SAMUEL", 
      "apellido": "SALAZAR LEAL", 
      "matricula": "sdfsdf"
    },
    {
      "nombre": "CLAUDIA YULIANA ", 
      "apellido": "MARES RODRÍGUEZ", 
      "matricula": "safdafdsf"
    },
    {
      "nombre": "ALONDRA BERENISE", 
      "apellido": "ZAMORA MORENO", 
      "matricula": "gfdgfd678"
    },
    {
      "nombre": "RODRIGO ANTONIO", 
      "apellido": "MARTINEZ MACIAS", 
      "matricula": "xcv5675"
    },
    {
      "nombre": "MANUEL FERNANDO", 
      "apellido": "RIVERA DE LEON", 
      "matricula": "cvfdg76"
    },
    {
      "nombre": "LUIS CARLOS", 
      "apellido": "HERNANDEZ RIVERA", 
      "matricula": "fgfdg5465"
    },
    {
      "nombre": "SAUL", 
      "apellido": "DAVILA GONZALEZ", 
      "matricula": "dsfd2"
    },
    {
      "nombre": "SANTIAGO ELIAM", 
      "apellido": "RAMIREZ GARCIA", 
      "matricula": "43242343fs"
    },
    {
      "nombre": "MIGUEL ANGEL", 
      "apellido": "SANCHEZ CARRILLO", 
      "matricula": "5345gfg"
    },
    {
      "nombre": "JOSE ANTONIO", 
      "apellido": "CANO JARAMILLO", 
      "matricula": "34df"
    },
    {
      "nombre": "JUAN FRANCISCO", 
      "apellido": "LOPEZ BARRIENTOS", 
      "matricula": "fgfdggdg4354355465"
    },
    {
      "nombre": "MIGUEL GIOVANNY", 
      "apellido": "VARGAS CANTU", 
      "matricula": "fdg34"
    },
    {
      "nombre": "ALEJANDRO", 
      "apellido": "BELTRAN ALVARADO", 
      "matricula": "ffsdf45gfdg5465"
    },
    {
      "nombre": "RICARDO ", 
      "apellido": "HERRERA ROMERO", 
      "matricula": "fdsf4"
    }, 
    {
      "nombre": "CRISTHIAN IOANNE ANGEL", 
      "apellido": "JUAREZ TOBIAS", 
      "matricula": "dsfdsfdfsdfdsf"
    }
  ]

  alumnoDetalle: any = {}

  matricula: string = this.ruta.snapshot.params['matricula'];
  getAlumnoDetalle(matricula: string): any {

    for(let i = 0; i < this.alumnos.length; i++){ //Ciclo para buscar alumno por matricula
      if(this.alumnos[i].matricula == this.matricula) { //valida si la matricula coincide en ese alumno
        this.alumnoDetalle = this.alumnos[i]; // asignar alumno a alumno detlle
      }
    }

    return this.alumnoDetalle;
  }

}
