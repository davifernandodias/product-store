import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Products } from '../../interfaces/product.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] 
})
export class FormComponent {

  @Input() product: Products | null = null; 
  form!: FormGroup;
  @Output() done = new EventEmitter<Products>();

  ngOnInit(): void { 
    this.form = new FormGroup({
      title: new FormControl<string>(this.product?.title ?? '', {
        nonNullable: true,
        validators: Validators.required,
      })
    });
  }

  onSubmit() {
    const product = this.form.value as Products;
    this.done.emit(product);
  }
}
