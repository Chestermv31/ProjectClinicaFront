import { Component } from '@angular/core';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent {
  citas: any[] = [];

  constructor(private citaService: CitaService) {}

  cargarCitas() {
    this.citas = this.citaService.getCitas();
  }
}

