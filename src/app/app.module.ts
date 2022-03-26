import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { IonicModule } from '@ionic/angular';

import { RoutesModule } from './routes/routes.module';

import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    TabsComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RoutesModule, 
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoutesModule]
})
export class AppModule { }
