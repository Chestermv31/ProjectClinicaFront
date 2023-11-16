import { Component, OnInit } from '@angular/core';
import { TokenService } from './servicios/token.service';
  @Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    sesionService: any;
registrar() {
throw new Error('Method not implemented.');
}

  title = 'Unishop';
isLogged = false;
username:string = "";

constructor(private tokenService:TokenService) { }

ngOnInit(): void {
  const objeto = this
  this.sesionService.currentMessage.subscribe({
  next(value: boolean) {
  objeto.actualizarSesion(value, objeto.tokenService.getUsername());
  }
  });
  this.actualizarSesion( this.tokenService.isLogged(), this.tokenService.getUsername() );
  }
  private actualizarSesion(estado:boolean, username:string | null){
  this.isLogged = estado;
  if(username != null){
  this.username = username;
  }
  }
  

logout(){
this.tokenService.logout();
}
}

