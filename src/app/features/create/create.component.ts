import { Component, inject } from '@angular/core';
import { FormGroup,FormControl ,ReactiveFormsModule, Validators } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Products } from '../../shared/interfaces/product.interface';



@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  


  public onSubmit(product: Products){
    this.productsService.post(product)
    .subscribe(()=>{
      this.matSnackBar.open('Sucess! Create Product','Ok');
      this.router.navigateByUrl('/')
    });
  }
  
}

