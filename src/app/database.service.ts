import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getListaAlumnos(){
    return this.http.get('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos/.json');
  }

  getAlumnoDetalle (id: string) {
    return this.http.get('https://alumnos-32-3679b-default-rtdb.firebaseio.com'+`/alumnos.json?orderBy="matricula"&equalTo=`+id+`"`);
  }

  deleteAlumno(id: string) {
    console.log(id);
    return this.http.delete('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos/'+id+'.json');
  }

  postAlumno(objeto : Object){
    this.http.post(environment.firebase.databaseURL+`/alumnos.json`, objeto).subscribe(resp => {console.log(resp)});
  }

  actualizarAlumno(obj: Object, index: string) {
    let text = JSON.stringify(obj);
    return this.http.put('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos/'+index+`.json`, text);
  }
}