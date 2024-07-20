import { DialogModule } from '@angular/cdk/dialog';
import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

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


@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor() { }

  matDialog = inject(MatDialog);


  openDiolog(): Observable<Boolean>{
    return this.matDialog
    .open(ConfirmationDialogComponent)
    .afterClosed()
  }
}
