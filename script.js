/* 
    Part One - Create a class for vehicle.
*/
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //Return "Beep."
    honk = function() {
        return "Beep.";
    }
    //Return the make, model and year
    toString = function() {
        return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`;
    }
}
  
/* 
    Part Two - Create a derived class "Car" with a property "numWheels" equal to 4
*/
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

/* 
    Part Three - Create a derived class "Motorcycle" with a property "numWheels" equal to 2
*/
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    //When invoked, return "VROOM!!!"
    revEngine = function() {
        return "VROOM!!!";
    }
}

/* 
    Part Four - Create a class "Garage" with a property "vehicles" which stores an array of objects derived from Vehicle
*/
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    //Add a Vehicle-derived object and ensure that it is actually derived from Vehicle
    add = function(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }   
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(vehicle);
        return "Vehicle added!";
    }
}