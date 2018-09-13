import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../interfaces/product.interface';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { ProductItemInterface } from '../interfaces/item.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient) { }

  cargarProductos(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>('https://portafolio-angular-8e920.firebaseio.com/Productos_idx.json');
  }

  getProductoById(id: string): Observable<ProductItemInterface> {
    return this.http.get<ProductItemInterface>(`https://portafolio-angular-8e920.firebaseio.com/Productos/${id}.json`);
  }

  buscarProducto(termino: string): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>('https://portafolio-angular-8e920.firebaseio.com/Productos_idx.json')
      .pipe(map(productos => this.filterProducto(productos, termino)));
  }

  private filterProducto(productos, termino: string): ProductInterface[] {
    return productos.filter(producto => producto.categoria.indexOf(termino) >= 0 || producto.titulo.indexOf(termino) >= 0);
  }
}
