import { Component, OnInit, Injectable  } from '@angular/core';
import {CrudServiceService} from '../crud-service.service';
import {DbOperationsService} from '../db-operations.service';
import { Listing} from '../models/listing';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.scss']
})
export class ViewListingComponent implements OnInit {

  listArr: any;
  viewList:any;
  isViewPage: boolean = false;

  constructor(private crudService :CrudServiceService, private dbOps: DbOperationsService, private http :HttpClient ) { }

  ngOnInit() {
    //this.crudService.getPhotos();
    this.dbOps.getListings().subscribe((data) => {this.listArr = data});
  }

  getListingByStatus(){
    let promise = new Promise(
      function(resolve, reject){ 
      let apiURL = 'http://localhost:3000/listing';
      this.http.get(apiURL)
      .toPromise()
      .catch(this.promiseErr); 

      promise.then(s=>{
          console.log("from promise");
      });
     
  })}
 
 promiseErr(err){
   console.log(err);
 }
 // }

  showListing(listing) {
    console.log(listing);
    //  this.dbOps.viewListing(2).subscribe((data) => {this.viewList = data});
    this.isViewPage = true;
     // console.log(this.viewList);
      this.dbOps.viewListing(listing.id).subscribe((data) => {this.viewList = data;});
  //  this.dbOps.addListing(this.newListing).subscribe((data) => console.log(data));

    //this.dbOps.editListing(232, this.editListing).subscribe((data) => console.log(data));

    //this.dbOps.deleteListing(3).subscribe((data) => console.log(data));;
  }

}
