// usuario.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from '../servicios/token.service';
import { MensajeDTO } from '../modelo/MensajeDTO';

@Injectable()
export class UsuarioInterceptor implements HttpInterceptor {
  refresh: any;

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Agregar token al encabezado si el usuario está logueado
    if (this.tokenService.isLogged()) {
      request = this.addToken(request);
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Manejar la respuesta del backend, si es necesario
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Si se recibe un error 401, intentar refrescar el token
          return this.handle401Error(request, next);
        } else {
          // Manejar otros tipos de errores
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    // Obtener el token del servicio de tokens
    const token = this.tokenService.getToken();

    // Clonar la solicitud y agregar el token al encabezado
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Llamar a la función refresh() para obtener un nuevo token
    const newToken = this.refresh();

    // Actualizar el token en el sessionStorage
    this.tokenService.setToken("newToken.respuesta");

    // Clonar la solicitud original y agregar el nuevo token
    const clonedRequest = this.addToken(request);

    // Reintentar la solicitud con el nuevo token
    return next.handle(clonedRequest);
  }

}
