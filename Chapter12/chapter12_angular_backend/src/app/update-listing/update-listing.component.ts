import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {DbOperationsService} from '../db-operations.service';
import { Listing} from '../models/listing';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.component.html',
  styleUrls: ['./update-listing.component.scss']
})
export class UpdateListingComponent implements OnInit {

  listId;
  successMsg:any;
  viewList: any;
  constructor(private route:ActivatedRoute, private dbOps:DbOperationsService) { }

  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get("id");
    this.dbOps.viewListing(this.listId).subscribe((data) => {this.viewList = data; } );
  }

  editListing(updatedList){
    console.log(updatedList);
    this.dbOps.editListing(updatedList.id, updatedList).subscribe((data) => {
      this.successMsg = data;
    });

  }

}
