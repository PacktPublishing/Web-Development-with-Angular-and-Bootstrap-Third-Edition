import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearningTypeScript';

  constructor() {

    /* Code Example #1 */
    let x = 5;
    if (x === 5) {
    let x = 10;
    console.log(x); // this line will output 10 to your console
    // note, x was allowed to be changed
    }
    console.log(x);


    /* Code Example #2 */
    var num: number = 12345; // this is a statically typed variable
    var num = 12345; // this is a dynamically typed variable

    /* Code Example #3 */
    var myDreamCars = [];
    myDreamCars.push("Porsche");

    /* Code Example #4 */
    var indexOfMercedes = myDreamCars.indexOf("Mercedes");
    console.log(indexOfMercedes);

    /* Code Example #5 - Maps */
    var mapLangCurve = new Map();
    mapLangCurve.set('Python', 'low');
    mapLangCurve.set('Java', 'medium');
    mapLangCurve.set('C++', 'high');

     /* Code Example #6 - Maps */
    //var arrLangCurve = [['Python', 'low'], ['Java', 'medium'], ['C++', 'high']];
    //var mapLangCurve2 = new Map(arrLangCurve);

    var langCurveSize = mapLangCurve.size;
    console.log(langCurveSize);

    var javaLearningCurve = mapLangCurve.get('Java');
    console.log(javaLearningCurve);

    //mapLangCurve2.delete('Python');

    /* Code Example #7  - Maps continue */
    for (let value of mapLangCurve.values()) {
      console.log(value);
    }

    mapLangCurve.clear();

    /* Code Example - Sets */
    var setCelestialObjects = new Set();
    setCelestialObjects.add('Earth');
    setCelestialObjects.add('Moon');
    setCelestialObjects.add('Solar System');setCelestialObjects.add('Milky Way');
    setCelestialObjects.add('Andromeda');
    setCelestialObjects.add(['Aries', 'Cassiopeia', 'Orion']);
    setCelestialObjects.add(7);

    var sizeCelestialObjects = setCelestialObjects.size;

    for (let element of setCelestialObjects) {
      console.log(element);
    }

    var setIntegers = new Set();
      setIntegers.add(1);
      setIntegers.add(7);
      setIntegers.add(11);
      setIntegers.forEach(function(value) {
          console.log(Math.pow(value, 2));
      });

    var setSquaredIntegers = new Set();
      setIntegers.forEach(function(value) {
      setSquaredIntegers.add(Math.pow(value, 2));
    });

    /* Code Example - Weak Sets */
    var myWeakSet = new WeakSet();

    var objA = {};
    var objB = {};
    var objC = {};
    myWeakSet.add(objA);
    myWeakSet.add(objB);
    myWeakSet.add(objC);
    //var lengthMyWeakSet = myWeakSet.length; // lengthMyWeakSet will be set to 3

    //console.log(lengthMyWeakSet);

  
  }

}