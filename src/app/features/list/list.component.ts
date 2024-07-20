import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Products } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent,RouterLink,MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  productsService = inject(ProductsService);
  router = inject(Router);

  products: Products[] = [];

  ngOnInit(){
    this.productsService.getAll().subscribe((products)=>{
      this.products = products  
    });
  }
  onEdit(product: Products){
    this.router.navigate(['/edit-product',product.id]);
  }
}
