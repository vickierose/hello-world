//1
class Car {
    name: string;
    public acceleration: number = 0; 

    constructor(name: string){
        this.name = name;
    }

    honk ()  {
        console.log("Toooooooooot!");
    };

    accelerate (speed: number) { 
        this.acceleration += speed;
    };
}

let car = new Car ('lada');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);