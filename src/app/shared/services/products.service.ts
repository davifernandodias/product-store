import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../interfaces/product.interface';
import { ProductsPayload } from '../interfaces/payload-products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient = inject(HttpClient);
  
  getAll(){
  return this.httpClient.get<Products[]>('api/products');
}

post(payload:ProductsPayload){
  return this.httpClient.post('api/products',payload);
    
  }
  
}
