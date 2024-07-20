import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Products } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogModule } from '@angular/cdk/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
  <h2 mat-dialog-title>Delete product</h2>
  <mat-dialog-content>
    Would you like to delete this product?
  </mat-dialog-content>
  <mat-dialog-actions >
    <button mat-button (click)="onNot()">No</button>
    <button mat-raised-button (click)="onYe()" cdkFocusInitial>Ok</button>
  </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, DialogModule],
})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNot(){
    this.matDialogRef.close(false);
  }
  
  onYe(){
    alert("boa")
    this.matDialogRef.close(true);
  }
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, MatDialogModule], // Adicionar MatDialogModule
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  productsService = inject(ProductsService);
  router = inject(Router);
  
  products: Products[] = [];

  matDialog = inject(MatDialog);
  
  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;  
    });
  }

  onEdit(product: Products) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Products) {
    this.matDialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
      .pipe(filter(answer => answer === true))
      .subscribe((answer: boolean) =>{
        this.productsService.delete(product.id).subscribe(()=>{
          this.productsService.getAll().subscribe((products)=>{
            this.products = products;
          })
        });
    });
  }
}
