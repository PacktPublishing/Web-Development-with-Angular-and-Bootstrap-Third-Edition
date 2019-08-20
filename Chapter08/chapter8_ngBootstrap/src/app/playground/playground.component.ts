import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  pageTitle: string = "Playground";
  
  constructor() { }

  ngOnInit() {
  }

  

}
