import { RegistroAtencionDTO } from "./RegistroAtencionDTO";

export interface MedicoDTO {
  id: number;
  nombre: string;
  dni: string;
  diasLibres: string[];
  especialidad: string;
  telefono: string;
  email: string;

  registrosAtencion: RegistroAtencionDTO[];
}

 

