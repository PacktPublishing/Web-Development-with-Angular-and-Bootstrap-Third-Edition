import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'realtycarousel';

  categories = [
    {categoryName:'New York', categoryId: '1'},
    {categoryName:'Dallas', categoryId: '2'},
    {categoryName:'California', categoryId: '3'}
  ];

}