import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
 
  constructor(private http: HttpClient) { }

  public getBrands(){
    var Brands = [
      { id: 1, name: 'BMW'},
      { id: 2, name: 'Mercedes'},
      { id: 3, name: 'Force Motors'},
      { id: 4, name: 'Toyoto Motors'},
    ];

    return Brands;
  }

   getSomeData() {
    return this.http.get('./users.json');
  }
}
