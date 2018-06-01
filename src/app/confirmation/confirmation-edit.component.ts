import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from '../service/customer';

@Component({
  templateUrl: 'confirmation-edit.component.html',
})
export class ConfirmationDialogEdit implements OnInit {
    formSubmitAtempt: boolean = null;
    constructor(
      public fb: FormBuilder,
      public snackBar: MatSnackBar,
      public dialogRef: MatDialogRef<ConfirmationDialogEdit>,
      @Inject(MAT_DIALOG_DATA) public data: Customer) {}  

    formationForm: FormGroup;
    customer: Customer;

    ngOnInit() {

      this.formationForm = this.fb.group({
        Id: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        postalcode: '',
      });


      if(this.data && this.data.Id>0)
      this.populateForm(this.data);
}

    onUpdate() {
      this.customer = this.formationForm.value;
      this.dialogRef.close('Confirm');
    }

    populateForm(d:Customer){
      if(!d) return;
      this.formationForm.patchValue({
        Id: d.Id,
        firstName: d.firstName,
        lastName: d.lastName,
        address: d.address,
        city: d.city,
        state: d.state,
        postalcode: d.postalcode,
      })
    }

}



