
export class RegistroAtencionDTO {
    

  fecha: Date;
  medicoId: number;
  pacienteId: number;
  medicamento: string;
  cantidad: number;

  constructor(fecha: Date, medicoId: number, pacienteId: number, medicamento: string, cantidad: number) {
    this.fecha = fecha;
    this.medicoId = medicoId;
    this.pacienteId = pacienteId;
    this.medicamento = medicamento;
    this.cantidad = cantidad;
  }

}
