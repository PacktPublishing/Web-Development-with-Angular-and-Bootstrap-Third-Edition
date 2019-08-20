import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { RouterLink, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  heading : string;
  loading = false;
  isAvailable = false;
  cars:any;

  owner = {
       name: 'Packt Pub'
   }

  private getCarsUrl:any = 'https://api.myjson.com/bins/1dguam';

  constructor(private _vehiclesService: VehiclesService, private http: HttpClient) {
    this.http = http;
   }

  ngOnInit() {
    this.heading = "List All Cars";
  }

  brands = this._vehiclesService.getBrands();

  getBrandCount(){
    let brands = this._vehiclesService.getBrands();
  }

  getCars() {
      this.cars = this.http.get(this.getCarsUrl);
      
      return this.cars;
  }

}
