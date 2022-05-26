import { Component, OnInit, Input, ɵisListLikeIterable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private db: DatabaseService, public formBuilder : FormBuilder) { }

  alumnos: any = []
  AltaForm! : FormGroup;
  isSubmitted = false;

  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";

  agregarAlumnos(): void {
    if(this.nombreAlumno.length==0 || this.apellidoAlumno.length==0 || this.matriculaAlumno.length==0){
      alert("Rellene todos los campos");
    }
    else{
      var nuevoAlumno: any = {
        "nombre": this.nombreAlumno,
        "apellido": this.apellidoAlumno,
        "matricula": this.matriculaAlumno
      }
      this.alumnos.push(nuevoAlumno); 
    }
  }

  ngOnInit(): void {
    this.AltaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      matricula: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  SubirForm(){
    this.isSubmitted = true;
    if(!this.AltaForm.valid){
      console.log('Please provide all the required values!')
      return false;
    }else {
      console.log(this.AltaForm.value);
      this.alumnos = this.alumnos.concat(this.AltaForm.value);
      this.db.postAlumno(this.AltaForm.value);
      return true;
    }
  }
}