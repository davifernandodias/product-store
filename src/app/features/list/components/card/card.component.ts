import { Component, computed, input, Output, EventEmitter, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Products } from '../../../../shared/interfaces/product.interface';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
onDelete() {
throw new Error('Method not implemented.');
}
  product = input.required<Products>();
  productService = inject(ProductsService);
  @Output() edit = new EventEmitter();

  productTitle = computed(()=> this.product().title);
  productId = computed(()=> this.product().id);

  onEdit(){
    this.edit.emit();
  }


}
