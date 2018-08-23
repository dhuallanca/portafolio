import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'app/services/info-pagina.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(private paginaService: InfoPaginaService) {
    console.log(this.paginaService);
  }

  ngOnInit() {
  }

}
