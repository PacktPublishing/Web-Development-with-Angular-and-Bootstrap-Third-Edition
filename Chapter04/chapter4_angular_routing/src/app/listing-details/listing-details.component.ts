import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
