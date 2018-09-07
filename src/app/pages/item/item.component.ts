import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductItemInterface } from '../../interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productItem: ProductItemInterface;
  id: string;

  constructor(private activeRoute: ActivatedRoute,
  private productoService: ProductoService) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe(parametros => {
        this.id = parametros['id'];
        this.productoService.getProductoById(this.id).subscribe(item => {
          this.productItem = item;
        });
      });
  }

}
