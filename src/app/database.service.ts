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

  getAlumnoDetalle(id: string) {
    return this.http.get('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos'+id+ '.json');
  }

  deleteAlumno(id: string) {
    return this.http.delete('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos/'+id+'.json');
  }

  postAlumno(objeto : Object){
    this.http.post('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos.json/', objeto).subscribe(resp => {console.log(resp)});
  }

  updateAlumno(index : string, alu:any) {
    return this.http.put('https://alumnos-32-3679b-default-rtdb.firebaseio.com/alumnos/'+index+'.json', alu);
  }
}