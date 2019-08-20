var Car = /** @class */ (function () {
    function Car(make, model) {
        this.speed = 10;
        this.make = make;
        this.model = model;
    }
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    Car.prototype.speedUp = function () {
        this.speed += 10;
    };
    Car.prototype.slowDown = function () {
        this.speed -= 10;
    };
    return Car;
}());
var car = new Car("2019", 'BMW Sports');
console.log(car.getSpeed());
