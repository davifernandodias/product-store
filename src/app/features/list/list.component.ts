import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Products } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  productsService = inject(ProductsService);

  products: Products[] = [];

  ngOnInit(){
    this.productsService.getAll().subscribe((products)=>{
      this.products = products  
    });
  }
}
