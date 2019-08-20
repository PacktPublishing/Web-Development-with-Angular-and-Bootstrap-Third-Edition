var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }
    Object.defineProperty(Car.prototype, "speed", {
        get: function () {
            return this.speed;
        },
        set: function (value) {
            this.speed = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.speedUp = function () {
        this.speed += 10;
    };
    Car.prototype.slowDown = function () {
        this.speed -= 10;
    };
    return Car;
}());
var myG6 = new Car('Pontiac', 'G6');
myG6.speedUp(); // this increases our speed by 10 mph
myG6.speedUp(); // this increases our speed by another 10 mph
myG6.speedUp(); // this increases our speed yet again, by 10 mph
myG6.speedUp(); // this increases our speed, one last time, by ... you guessed it, 10 mph
