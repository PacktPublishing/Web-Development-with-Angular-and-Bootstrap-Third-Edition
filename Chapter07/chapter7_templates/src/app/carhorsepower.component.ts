import { Component } from '@angular/core';

@Component({
    selector: 'car-hp',
    template: `
      <h3>Cars styled by their HP range</h3>
      <ul *ngFor="let car of cars" [ngSwitch]="car.horsepower"> 
        <li *ngSwitchCase="390" class="super-car">
          {{ car.make }} {{ car.model }} 
        </li>
        <li *ngSwitchCase="182" class="sports-car">
          {{ car.make }} {{ car.model }}
        </li>
        <li *ngSwitchDefault class="grandma-car">
          {{ car.make }} {{ car.model }}
        </li>
      </ul>
    `,
    styles: [`
      .super-car {
        color:#fff;
        background-color:#ff0000;
      },
      .sports-car {
        color:#000;
        background-color:#ffa500;
      },
      .grandma-car {
        color:#000;
        background-color:#ffff00;
      }
    `]
  })
  export class CarHorsepowerComponent {
    cars: any[] = [
      {
        "make": "Ferrari",
        "model": "Testerosa",
        "horsepower": 390
      },
      {
        "make": "Buick",
        "model": "Regal",
        "horsepower": 182 
      }, 
      {
        "make": "Porsche",
        "model": "Boxter",
        "horsepower": 320
      }, 
      {
        "make": "Lamborghini",
        "model": "Diablo",
        "horsepower": 485
      }
    ];
  }