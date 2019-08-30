import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {DbOperationsService} from '../db-operations.service';
import { Listing} from '../models/listing';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-delete-listing',
  templateUrl: './delete-listing.component.html',
  styleUrls: ['./delete-listing.component.scss']
})
export class DeleteListingComponent implements OnInit {

viewList:Observable<Listing>;
listId;
successMsg:any;
constructor(private route:ActivatedRoute, private dbOps:DbOperationsService) { }

  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get("id");
    this.dbOps.deleteListing(this.listId).subscribe((data) => {
      this.successMsg = data;
    });
  }
  
}
