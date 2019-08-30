import { Component, OnInit } from '@angular/core';
import {Cars} from '../cars';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.scss']
})
export class UsedCarsComponent implements OnInit {

  readonly REST_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
  newCar:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    
    //console.log(form.value);
   /*
    const createNewCar : Cars = {
      id: 10001,
      CarName: 'Force Moto'
    }
*/
    this.newCar = this.http.post(this.REST_ENDPOINT, form.value);
    return this.newCar;
    
  }

}
