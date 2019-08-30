import { Component, OnInit } from '@angular/core';
import { DealersService } from '../services/dealers.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Dealers } from '../services/dealers';
import { Cars } from '../cars';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss']
})
export class AutoListComponent implements OnInit {

  cars = [
    { 'id': '1', 'name': 'BMW' },
    { 'id': '2', 'name': 'Force Motors' },
    { 'id': '3', 'name': 'Audi' }
  ];

  tab = "1";
  dealers: any;
  allDealers:any;
  dealerDetail:any;
  showDealerInfo = false;
  dealerInfo:Dealers;
  carList:Observable<Cars[]>;
  
  _carurl = 'http://localhost:3000/cars';

  constructor(private _dealersService : DealersService, private http: HttpClient) { }
 
  ngOnInit() {
  }

  findAuto() {
     this.dealers = this._dealersService.getDealers();
     return this.dealers;
  }

  listAllDealers(){
    this.allDealers = this._dealersService.getAllDealers();
  }

  listDealerById(){
    this.showDealerInfo = true;
    this.dealerDetail = this._dealersService.getDealerById();
    return this.dealerDetail;
  }

  getCarList() {
    this.carList = this.http.get<Cars[]>(this._carurl);
  }

}
