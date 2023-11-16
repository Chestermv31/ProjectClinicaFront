import { Component, OnInit } from '@angular/core';
import { MedicosService } from 'src/app/servicios/medicos.service'
import { MedicoDTO } from 'src/app/modelo/MedicoDTO';

@Component({
  selector: 'app-gestion-medicos',
  templateUrl: './gestion-medicos.component.html',
  styleUrls: ['./gestion-medicos.component.css']
})
export class GestionMedicosComponent implements OnInit {
  medicos: MedicoDTO[] | undefined;

  constructor(private medicoService: MedicosService) {}

  ngOnInit() {
    this.medicos = this.medicoService.getMedicos();
  }

  addDiaLibre(medico: MedicoDTO) {
    this.medicoService.addDiaLibre(medico.id, new Date());
  }

  removeDiaLibre(medico: MedicoDTO) {
    this.medicoService.removeDiaLibre(medico.id, new Date());
  }

  addOrdenMedicamento(pacienteId: number, medicamento: string, cantidad: number) {
    this.medicoService.addOrdenMedicamento(pacienteId, medicamento, cantidad);
  }

  removeOrdenMedicamento(pacienteId: number, medicamento: string) {
    this.medicoService.removeOrdenMedicamento(pacienteId, medicamento);
  }
}