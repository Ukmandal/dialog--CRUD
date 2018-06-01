import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
          MatInputModule,
          MatButtonModule, 
          MatDialogModule, 
          MatCardModule,
          MatSnackBarModule, } from '@angular/material';

import { AppComponent } from "./app.component";
import { DialogDemoComponent } from "./dialog-demo/dialog-demo.component";
import { ConfirmationDialogDelete } from "./confirmation/confirmation-delete.component";
import { ConfirmationDialogEdit } from "./confirmation/confirmation-edit.component";

@NgModule({
  declarations: [
        AppComponent,
        DialogDemoComponent,
        ConfirmationDialogDelete,
        ConfirmationDialogEdit,
        ],


imports: [  
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule ,
  MatSnackBarModule
],

  entryComponents: [
    ConfirmationDialogDelete, 
    ConfirmationDialogEdit],

  bootstrap: [AppComponent,],
})
export class AppModule { }
