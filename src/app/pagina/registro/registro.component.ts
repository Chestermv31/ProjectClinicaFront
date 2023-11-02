import { Component } from '@angular/core';
import { DetallePacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
  
})
export class RegistroComponent {[x: string]: any;

  detatallePacienteDTO: DetallePacienteDTO;
  constructor(){
  this.detatallePacienteDTO = new DetallePacienteDTO();
  
  
  }
  archivos!:FileList;
  public registrar(){
    if(this.archivos != null && this.archivos.length > 0){
    console.log(this.detatallePacienteDTO);
    }else{
    console.log("Debe cargar una foto");
    }
    }

  public sonIguales():boolean{
    return this.detatallePacienteDTO.password == this.detatallePacienteDTO.confirmaPassword;
      }
/*
      ciudades:string[];
     
      this.ciudades = [];
      this.cargarCiudades();
      }

      private cargarCiudades(){
        this.ciudades.push("Armenia");
        this.ciudades.push("Calarcá");
        this.ciudades.push("Pereira");
        this.ciudades.push("Manizales");
        this.ciudades.push("Medellín");
        }
*/
        
  public onFileChange(event:any){
    if (event.target.files.length > 0) {
    const files = event.target.files;
    console.log(this.archivos = event.target.files);
    }
          }
  


 
}
