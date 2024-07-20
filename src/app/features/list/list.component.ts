import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Products } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, MatDialogModule], // Adicionar MatDialogModule
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products = signal<Products[]>(inject(ActivatedRoute).snapshot.data['products']) ;
  
  productsService = inject(ProductsService);
  router = inject(Router);
  confirmationDiologService = inject(ConfirmationDialogService);

  

  onEdit(product: Products) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Products) {
    this.confirmationDiologService
    .openDiolog()
    .pipe(filter(answer => answer === true))
    .subscribe(() =>{
      this.productsService.delete(product.id).subscribe(()=>{
        this.productsService.getAll().subscribe((products)=>{
          this.products.set(products);
        })
      });
    });
  }
}
