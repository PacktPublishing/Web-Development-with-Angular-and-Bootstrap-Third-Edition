import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss']
})
export class ListImagesComponent implements OnInit {

  @Input()  firstName: string;

  constructor() { }

  ngOnInit() {
  }

  public greetUser() {
    return 'Hello '+this.firstName;
  }

  public getImageDetails()
  { 
    
  }
}
