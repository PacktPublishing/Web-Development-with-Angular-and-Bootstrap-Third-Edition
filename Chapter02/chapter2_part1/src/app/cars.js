/*
class Car {

  let make;
  let model;
  let speed;
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  public get speed() {
    return this._speed;
  }
  public set speed(value) {
    this._speed = value;
  }
  public function speedUp() {
    this.speed += 10;
  }
  public function slowDown() {
    this.speed -= 10;
  }
}

var myG6 = new Car('Pontiac', 'G6');

myG6.speedUp(); // this increases our speed by 10 mph
myG6.speedUp(); // this increases our speed by another 10 mph
myG6.speedUp(); // this increases our speed yet again, by 10 mph
myG6.speedUp(); // this increases our speed, one last time, by ... you guessed it, 10 mph

*/
var Car = /** @class */ (function () {
    function Car(message) {
        this.greeting = message;
    }
    Car.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Car;
}());
