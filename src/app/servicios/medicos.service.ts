import { Injectable } from '@angular/core';
import { DiaLibreDTO } from 'src/app/modelo/DiaLibreDTO';
import { RegistroAtencionDTO } from 'src/app/modelo/RegistroAtencionDTO';
import { MedicoDTO } from 'src/app/modelo/MedicoDTO';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  getMedicos(): MedicoDTO[] | undefined {
    throw new Error('Method not implemented.');
  }
  removeDiaLibre(id: number, arg1: Date) {
    throw new Error('Method not implemented.');
  }
  addDiaLibre(id: number, arg1: Date) {
    throw new Error('Method not implemented.');
  }
  medicos: MedicoDTO[] | undefined;
  removeOrdenMedicamento(pacienteId: number, medicamento: string) {
    throw new Error('Method not implemented.');
  }
  addOrdenMedicamento(pacienteId: number, medicamento: string, cantidad: number) {
    throw new Error('Method not implemented.');
  }



}
