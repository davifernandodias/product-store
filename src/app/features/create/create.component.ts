import { Component } from '@angular/core';
import { FormGroup,FormControl ,ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form = new FormGroup({
    title: new FormControl<string>('',{
    nonNullable:true,
    validators: Validators.required,})
  })

  public onSubmit(){
    this.form.controls.title;
  }
}

