import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'car-hp2',
    template: `
      <h3>Cars styled by their HP range</h3>
      <ul *ngFor="let car of cars">
        <li [ngClass]=" getCarTextStyle(car.horsepower) " >
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
    .grandmas-car {
      color:#000;
      background-color:#ffff00; 
    } 
 `], 
    encapsulation: ViewEncapsulation.Native,
  })
  export class CarHorsepower2Component {
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

      getCarTextStyle(horsepower) {
        switch (horsepower) {
            case (horsepower < 375):
                return 'super-car';
          case (horsepower >= 200 && horsepower < 375):
            return 'sports-car';
          default:
            return 'grandma-car';
        }
      }
  }
