import { Component, computed, input, Output, EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Products } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<Products>();
  
  @Output() edit = new EventEmitter();

  productTitle = computed(()=> this.product().title);
  productId = computed(()=> this.product().id);

  onEdit(){
    this.edit.emit();
  }
}
