import { Component, OnInit } from '@angular/core';
import {DbOperationsService} from '../db-operations.service';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {

  userId = 1;
  newListing;
  successMsg;
  
  constructor(private dbOps: DbOperationsService) { }

  ngOnInit() {
  }

  addNewList(listForm)
  {
    console.log(listForm);
    this.newListing = {
      "userId":this.userId,
      "id": 168,
      "title":listForm.title,
      "price":listForm.price,
      "status":listForm.status,
    };
    
    this.dbOps.addListing(this.newListing).subscribe((data) => {
      console.log(data);
      this.successMsg = data;

    });

  }

}
