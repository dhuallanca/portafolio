import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { EquipoInterface } from '../interfaces/equipo.interface';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable()
export class InfoPaginaService {

  constructor(private httpCLient: HttpClient) {
    // this.cargarData();
    // this.cargarEquipo();
  }

  public cargarData(): Observable<InfoPaginaInterface> {
    return this.httpCLient.get<InfoPaginaInterface>('../assets/data/data-pagina.json');
  }

  public cargarEquipo(): Observable<EquipoInterface[]> {
    return this.httpCLient.get<EquipoInterface[]>('https://portafolio-angular-8e920.firebaseio.com/Equipo.json');
  }

}
