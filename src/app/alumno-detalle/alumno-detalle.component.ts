import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private db: DatabaseService,
    public formBuilder : FormBuilder) { }

    alumnoDetalle: any = {}
    search : string = '';
    mat : string = this.ruta.snapshot.params['matricula'];
    editar: boolean = false;
    ionicForm! : FormGroup;
    isSubmitted = false;
    
    ngOnInit(): void {
    console.log(this.mat);
    this.db.getAlumnoDetalle(this.mat).subscribe(resp => {
      console.log(resp);
      this.alumnoDetalle = Object.values(resp)[0];
      this.search = Object.keys(resp).toString();
    })
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      matricula: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  regresar(){
    window.location.href='/lista';
  }

  eliminar(){
    console.log(this.search);
    this.db.deleteAlumno(this.search).subscribe(resp => {
      if(resp == null){
        console.log('Borro algo....');
        window.location.href="/lista";
      }else{
        console.log('No se logro borrar');
      }
    });
  }

  toggleEdit(){
    this.editar = !this.editar;
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
      this.db.actualizarAlumno(this.ionicForm.value, this.search).subscribe(res => {
        console.log(res);
      })
      window.location.href="/lista";
      return true;
    }
  }

  agregarFavoritos(): void{

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
          this.eliminar();
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
          this.agregarFavoritos();
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