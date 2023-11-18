import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/modelo/LoginDTO';
import { MensajeDTO } from 'src/app/modelo/MensajeDTO';
import { JwtDto } from '../modelo/jwt-dto';
import { PacienteDTO } from 'src/app/modelo/PacienteDTO';
import { RegistroMedicoDTO } from 'src/app/modelo/RegistroMedicoDTO';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  refresh(jwt: JwtDto) {
    throw new Error('Method not implemented.');
  }
  private authURL = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  // public registrarPaciente(paciente:RegistroPacienteDTO):Observable<MensajeDTO>{
  //   return this.http.post<MensajeDTO>(`${this.authURL}/registrar-paciente`, paciente);
  //   }


  public registrar(paciente: PacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrar`, paciente);
  }

  public crearMedico(medico: RegistroMedicoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/crearMedico`, medico);
  }


  public login(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
  }

}