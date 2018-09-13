import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(terminoBusqueda: string) {
    if (terminoBusqueda.length < 1) {
      return;
    }
    this.router.navigate(['/search', terminoBusqueda]);
  }

}
