import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-cards',
  templateUrl: './material-cards.component.html',
  styleUrls: ['./material-cards.component.scss']
})
export class MaterialCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuLinks: string[] = ['Home', 'About Us', 'Contact Us', 'Blog'];
}
