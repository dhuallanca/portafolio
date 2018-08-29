import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  products: ProductInterface[];

  constructor(private productService: ProductoService) {
  }

  ngOnInit() {
    this.productService.cargarProductos()
      .subscribe(response => this.products = response);
  }

}
