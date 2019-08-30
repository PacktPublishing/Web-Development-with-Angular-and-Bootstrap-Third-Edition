import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Dealers } from './dealers';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Cars } from '../cars';

@Injectable({
  providedIn: 'root'
})
export class DealersService {

  readonly REST_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
  readonly DEALER_REST_ENDPOINT = 'https://jsonplaceholder.typicode.com/users/1';

  private _carurl = 'http://localhost:3000/cars';

  dealers: any;
  allDealers:any;
  dealerDetails:any;
  carList;
  dealerObj;
  constructor(private http : HttpClient) { }

  getDealers(){
    let dealers = [
      { id: 1, name: 'North Auto'},
      { id: 2, name: 'South Auto'},
      { id: 3, name: 'East Auto'},
      { id: 4, name: 'West Auto'},
    ];

    return dealers;
  }

  getDealerObject()
  {
    this.dealerObj= new Dealers('World','Auto');
    return this.dealerObj;
  }

  getAllDealers()
  {
    this.allDealers = this.http.get(this.REST_ENDPOINT,
        {
            headers: new HttpHeaders().set('Accept', 'aplication/json')
        });
    return this.allDealers;
  }

  getDealerById(){
    let params = new HttpParams().set('id', '1');
    this.dealerDetails = this.http.get(this.REST_ENDPOINT, {params});
    return this.dealerDetails;
  }

}