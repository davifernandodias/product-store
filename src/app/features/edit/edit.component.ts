import { Component, Inject, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../shared/interfaces/product.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  productsService = inject(ProductsService);
  router= inject(Router);
  matSanckBar = inject(MatSnackBar);
  product: Products = inject(ActivatedRoute).snapshot.data['product'];

  form = new FormGroup({
    title: new FormControl<string>(this.product.title,{
    nonNullable:true,
    validators: Validators.required,})
  })


  public onSubmit(){
    this.productsService.put( this.product.id,{
      title: this.form.controls.title.value
    })
    .subscribe(()=>{
      this.matSanckBar.open('Sucess! Update Product','Ok');
      this.router.navigateByUrl('/')
    });
  }

}
