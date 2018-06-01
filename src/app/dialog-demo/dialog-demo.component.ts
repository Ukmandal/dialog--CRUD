import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ConfirmationDialogDelete } from '../confirmation/confirmation-delete.component';
import { ConfirmationDialogEdit } from '../confirmation/confirmation-edit.component';
import { Customer } from '../service/customer';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'dialog-demo',
    templateUrl: 'dialog-demo.component.html',
})
export class DialogDemoComponent implements OnInit {
  
    formationForm: FormGroup;
    customer: Customer;

    cs: Customer[] = [
        {
            Id: 1, 
            firstName: 'Umesh', 
            lastName: 'Mandal', 
            address: 'Nepal', 
            city: 'Kathmandu', 
            state: 'Nepal', 
            postalcode: '44600'},

        {
            Id: 2, 
            firstName: 'Binod', 
            lastName: 'Shrestha', 
            address: 'Nepal', 
            city: 'Kathmandu', 
            state: 'Nepal', 
            postalcode: '44600'},

        {
            Id: 3, 
            firstName: 'Ganesh', 
            lastName: 'Adhikari', 
            address: 'Nepal', 
            city: 'Kathmandu', 
            state: 'Nepal', 
            postalcode: '44600'},

        {
            Id: 4, 
            firstName: 'Jaydeep', 
            lastName: 'Sah', 
            address: 'Nepal', 
            city: 'Kathmandu', 
            state: 'Nepal', 
            postalcode: '44600'},

        {
            Id: 5, 
            firstName: 'Harson', 
            lastName: 'Suwal', 
            address: 'Nepal', 
            city: 'Kathmandu', 
            state: 'Nepal', 
            postalcode: '44600'},

        {
            Id: 6, 
            firstName: 'Ravi', 
            lastName: 'Jaiswal', 
            address: 'Nepal', 
            city: 'Kathmandu', 
            state: 'Nepal', 
            postalcode: '44600'},
    

    ];

    constructor(
        public dialog: MatDialog,
        public snackBar: MatSnackBar,) {}

  ngOnInit() {
  }

  //openConfirmationDialogDelete-part1
  openConfirmationDialogDelete(Id: number) {
    let dialogRef = this.dialog.open(ConfirmationDialogDelete, { 
        disableClose: true,
        width: '300px',
    });
        dialogRef.afterClosed().subscribe(result => {
            if(result) {
                let copy = this.cs.slice();
                let index = this.cs.findIndex(x =>  x.Id ===Id);
                if(index>-1) {
                    copy.splice(index, 1),
                    this.cs = copy;
                }  
            }
            else 
            {
                return false;
            }
        let snackBarRef = this.snackBar.open('Message Deleted Successfully!', 'Got it!');
        })
  }

  //openConfirmationDialogEdit and add-part2
  openConfirmationDialogEdit(Id: number) {
    let item = this.cs.find(x =>  x.Id ===Id);
    let dialogRef = this.dialog.open(ConfirmationDialogEdit, { 
        disableClose: true,
        width: '600px',
        data:item?item:{},
    });

    dialogRef.afterClosed().subscribe(item => {
        let d:Customer = dialogRef.componentInstance.customer;
        if(!d) return;
            let copy = this.cs.slice(); 
            let i = copy.findIndex(x=> x.Id === d.Id);

            if(i>-1)
            { 
                copy[i] = d;
                this.cs = copy;
            }
            else {
            let max = Math.max(...this.cs.map(x => x.Id));
            d.Id = max +1;
            copy.push(d);
            this.cs = copy;
            } 
    let snackBarRef = this.snackBar.open('Message Saved Successfully!', 'Got it!');
    })
  }
 

 }
