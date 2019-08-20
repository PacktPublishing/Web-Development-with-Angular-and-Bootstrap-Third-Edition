import { Component, OnInit, Inject} from '@angular/core';
import { VERSION, MatDialogRef, MatDialog } from '@angular/material';
import {AddDialogComponent} from '../add-dialog/add-dialog.component'
@Component({
  selector: 'app-material-modals',
  templateUrl: './material-modals.component.html',
  styleUrls: ['./material-modals.component.scss']
})
export class MaterialModalsComponent implements OnInit {

    constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent);
  }

}