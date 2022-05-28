import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { ModalController } from '@ionic/angular';
import { Alumno } from '../alumno';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute,
    private bd: DatabaseService,
    private modal: ModalController) { }

  alumno: Alumno = {
    matricula: "",
    apellido: "",
    nombre: ""
    };

  id: string = this.ruta.snapshot.params['index'];

  ngOnInit(): void {
    this.bd.getAlumnoDetalle(this.id).subscribe(res => {
      let alumno = Object.assign(res);
      this.alumno = Object.assign(alumno);
    })
    console.log(this.alumno);
  }

  closeModal(){
    this.modal.dismiss();
    }

  alumnos:any = [];

  modAlumno(){
    console.log(this.alumno)
    this.bd.updateAlumno(this.id, this.alumno).subscribe(res => {
      console.log(res);
    })
    this.editado = !this.editado;
    this.modal.dismiss();
  }


  editado = false;

}