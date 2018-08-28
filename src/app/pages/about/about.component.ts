import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'app/services/info-pagina.service';
import { EquipoInterface } from '../../interfaces/equipo.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: EquipoInterface[] = [];
  constructor(private paginaService: InfoPaginaService) { }

  ngOnInit() {
    this.paginaService.cargarEquipo().subscribe((response) => {
      this.equipo = response;
    });
  }

}
