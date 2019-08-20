class Car {
	make : string;
	model : string;
	speed: number = 10;
    constructor(make : string, model:string) {
		this.make = make;
		this.model = model;
    }
	
	getSpeed()
	{
		return this.speed;
	}
	
	  speedUp() {
		this.speed += 10;
	  }
	  slowDown() {
		this.speed -= 10;
	  }
}
let car = new Car("2019", 'BMW Sports');

console.log(car.getSpeed());

