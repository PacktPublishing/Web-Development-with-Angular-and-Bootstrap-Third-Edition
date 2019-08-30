import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTemplates';
  my_content = 'Learning Angular with Packt';

  products: any[] = [
    {
      "code": "p100",
      "name": "Moto",
      "price": 390.56
    },
    {
      "code": "p200",
      "name": "Micro",
      "price": 240.89
    },
    {
      "code": "p300",
      "name": "Mini",
      "price": 300.43
    }
  ];

  alertMe(){
    alert('This is an example of event binding in Angular');
  }

}
