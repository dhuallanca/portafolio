import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productsFiltered: ProductInterface[];

  constructor(private route: ActivatedRoute,
    private productoService: ProductoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productoService.buscarProducto(params['termino']).subscribe(result => this.productsFiltered = result);
    }
    );
  }

}
