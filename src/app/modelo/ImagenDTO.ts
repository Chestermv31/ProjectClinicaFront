export class ImagenDTO {
    nombre: string;
    tipo: string;
    tamaño: number;
    datos: Uint8Array;
  
    constructor(nombre: string, tipo: string, tamaño: number, datos: Uint8Array) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.tamaño = tamaño;
      this.datos = datos;
    }
  }
  