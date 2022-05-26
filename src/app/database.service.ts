import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getListaAlumnos(){
    return this.http.get(environment.firebase.databaseURL+`/alumnos.json`);
  }

  getAlumnoDetalle (id: string) {
    return this.http.get(environment.firebase.databaseURL+`/alumnos.json?orderBy="matricula"&equalTo=`+id+`"`);
  }

   deleteAlumno(id: string) {
    return this.http.delete(environment.firebase.databaseURL+`/alumnos/`+id+`.json`);
  }

  postAlumno(objeto : Object){
    this.http.post(environment.firebase.databaseURL+`/alumnos.json`, objeto).subscribe(resp => {console.log(resp)});
  }

  actualizarAlumno(obj: Object, index: string) {
    let text = JSON.stringify(obj);
    return this.http.put(environment.firebase.databaseURL+`/alumnos/`+index+`.json`, text);
  }
}