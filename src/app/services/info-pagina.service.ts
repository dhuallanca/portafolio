import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfoPaginaService {

  constructor(private httpCLient: HttpClient) {
    this.cargarData();
    this.cargarEquipo();
  }

  private cargarData() {
    this.httpCLient.get('../assets/data/data-pagina.json')
    .subscribe(response => {
      console.log('data:', response);
    });
  }

  private cargarEquipo() {
    this.httpCLient.get('https://portafolio-angular-8e920.firebaseio.com/Equipo.json')
    .subscribe(response => {
      console.log('equipo:', response);
    });
  }

}
