import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import {GestionPqrsComponent} from 'src/app/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { CrearCitaComponent } from './pagina/crear-citas/crear-cita.component';
import { GestionMedicosComponent } from './pagina/gestion-medicos/gestion-medicos.component';
import { LoginGuard } from './guards/login.guard';
import { UsuarioGuard } from './guards/usuario.guard';


const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "gestion-pqrs", component: GestionPqrsComponent },
{ path: "crear-pqrs", component: CrearPqrsComponent },
{ path: "detalle-pqrs/:codigo", component: DetallePqrsComponent },
{ path: "gestion-citas", component: GestionCitasComponent },
{ path: "crear-citas", component: CrearCitaComponent },
{ path: "gestion-medicos", component: GestionMedicosComponent },
{ path: "login", component: LoginComponent, canActivate: [LoginGuard] },
{ path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
{ path: "admin/gestionar_ciudades", component: GestionCitasComponent, canActivate:[UsuarioGuard], data: { expectedRole: ['ADMIN'] } },
{ path: "**", pathMatch: "full", redirectTo: "" },
 


];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],

})
export class AppRoutingModule { }

