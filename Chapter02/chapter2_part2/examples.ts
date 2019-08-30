class Car {

  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  public get speed() {
    return this.speed;
  }
  public set speed(value) {
    this.speed = value;
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