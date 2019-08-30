import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('An instance of our CarComponent has been fully initialized.');
  }

}
