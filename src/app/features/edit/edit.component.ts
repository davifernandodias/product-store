import { Component, Inject, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../shared/interfaces/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  productsService = inject(ProductsService);
  router= inject(Router);
  matSanckBar = inject(MatSnackBar);
  product: Products = inject(ActivatedRoute).snapshot.data['product'];



  public onSubmit(product:Products){
    this.productsService.put( this.product.id,product).subscribe(()=>{
      this.matSanckBar.open('Sucess! Update Product','Ok');
      this.router.navigateByUrl('/')});
  }

}
