import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';

import { DatabaseService } from '../database.service';

import { Alumno } from '../alumno';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private db: DatabaseService) { }

  ngOnInit(): void {
    this.getAlumnoDetalle(this.id);
  }

  alumnoDetalle: any = {}

  id: number = this.ruta.snapshot.params['index'];

  getAlumnoDetalle (id: number): any {
    this.db.getAlumnoDetalle(id).subscribe(res => {
      let alumno = Object.assign(res);
      this.alumnoDetalle = res;
      this.alumnoNuevosDatos = alumno;
    })
  }

  editando = false;
  editar(){
    this.editando = true;
  }
  

  guardar(){
    this.db.updateAlumno(this.id, this.alumnoNuevosDatos).subscribe(res => {
      console.log(res);
    });
    this.editando = false;
  }

  alumnoNuevosDatos : Alumno = {
    nombre: "",
    apellido: "",
    matricula: ""
  }

  //matricula: string = this.ruta.snapshot.params['matricula'];
  /*getAlumnoDetalle(matricula: string): any {

    for(let i = 0; i < this.alumnos.length; i++){ //Ciclo para buscar alumno por matricula
      if(this.alumnos[i].matricula == this.matricula) { //valida si la matricula coincide en ese alumno
        this.alumnoDetalle = this.alumnos[i]; // asignar alumno a alumno detlle
      }
    }

    return this.alumnoDetalle;
  }*/

  agregarFavoritos(): void {
    //algo
  }

  async abrirActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'mi-action-sheet',
      mode: 'ios',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        data: 10, 
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Enviar por correo',
        icon: 'caret-forward-circle',
        data: 'Data value', 
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          this.agregarFavoritos
          //console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel', 
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}