import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { CrearCitaComponent } from './pagina/crear-citas/crear-cita.component';
import { GestionMedicosComponent } from './pagina/gestion-medicos/gestion-medicos.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { RegistroMedicosComponent } from './pagina/registro-medicos/registro-medicos.component';
import { MedicosService } from './servicios/medicos.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    GestionPqrsComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    GestionCitasComponent,
    CrearCitaComponent,
    RegistroMedicosComponent,
    GestionMedicosComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }
  ,MedicosService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
