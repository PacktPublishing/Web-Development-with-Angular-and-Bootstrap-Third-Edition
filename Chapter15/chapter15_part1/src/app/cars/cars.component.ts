import { Component, OnInit } from '@angular/core';
import { VehiclesService} from '../vehicles.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private vehiclesService:  VehiclesService) { }

  brands = this.vehiclesService.getBrands();

  ngOnInit() {
  }

  getBrandCount() {
    const brands = this.vehiclesService.getBrands().length;
    return brands;
  }
}
