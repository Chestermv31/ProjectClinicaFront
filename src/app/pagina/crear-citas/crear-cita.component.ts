import { Component } from '@angular/core';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitaComponent {
  citas: any[] = [];
  mostrarCitas: boolean = false;

  constructor(private citaService: CitaService) {
    this.citas = citaService.getCitas();
  }

  mostrarOcultarCitas() {
    this.mostrarCitas = !this.mostrarCitas;
  }
}
