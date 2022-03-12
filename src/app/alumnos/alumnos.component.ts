import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre": "Yuliana", 
      "apellido": "Mares", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Yuliana", 
      "apellido": "Mares", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Yuliana", 
      "apellido": "Mares", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Yuliana", 
      "apellido": "Mares", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Yuliana", 
      "apellido": "Mares", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Yuliana", 
      "apellido": "Mares", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Yuliana", 
      "apellido": "Mares", 
      "matricula": "ABC123"
    }
  ]

  ngOnInit(): void {
  }

}
