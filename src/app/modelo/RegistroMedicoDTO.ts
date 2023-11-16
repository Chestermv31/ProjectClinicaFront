import { HorarioDTO } from "./HorarioDTO";

export class RegistroMedicoDTO {
  nombre: string = "";
  cedula: string = "";
  ciudad: string = "";
  especialidad: string = "";
  telefono: string = "";
  correo: string = "";
  password: string = "";
  confirmaPassword: string = "";
  urlFoto: string = "";
  horarios: HorarioDTO[] = [];
  
}
