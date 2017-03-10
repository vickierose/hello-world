//1
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    ;
    return Car;
}());
var car = new Car('lada');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
