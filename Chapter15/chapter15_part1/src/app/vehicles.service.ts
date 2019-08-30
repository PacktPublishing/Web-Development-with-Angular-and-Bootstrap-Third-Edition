import { Injectable } from '@angular/core';
import { Brands } from './brands';

@Injectable({
  providedIn: 'root'
})

export class VehiclesService {

  constructor() { }

  Brands: Brands[] = [
      { id: 1, name: 'BMW', url: 'http://bmw.com'},
      { id: 2, name: 'Audi', url: 'http://audi.com'},
      { id: 3, name: 'Force', url: 'http://force.com'},
    ];
  getBrands() {
    return this.Brands;
  }

}
