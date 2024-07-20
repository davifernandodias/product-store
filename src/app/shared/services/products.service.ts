import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../interfaces/product.interface';
import { ProductsPayload } from '../interfaces/payload-products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Products[]>('api/products');
  }

  get(id: string) {
    return this.httpClient.get<Products>(`api/products/${id}`);
  }

  post(payload: ProductsPayload) {
    return this.httpClient.post('api/products', payload);
  }

  put(id: string, payload: ProductsPayload) {
    return this.httpClient.put(`api/products/${id}`, payload);
  }

  delete(id: string, payload: ProductsPayload) {
    return this.httpClient.put(`api/products/${id}`, payload);
  }
}
