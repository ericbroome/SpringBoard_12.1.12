describe("Vehicle Class", () => {
    it("Creates a class having properties make, model and year and a method honk()", () => {
        const vehicle = new Vehicle("Dodge", "Journey", 2015);
        expect(vehicle.hasOwnProperty("make")).toEqual(true);
        expect(vehicle.hasOwnProperty("model")).toEqual(true);
        expect(vehicle.hasOwnProperty("year")).toEqual(true);
        expect(vehicle.hasOwnProperty("honk")).toEqual(true);
        expect(vehicle.make).toEqual("Dodge");
        expect(vehicle.model).toEqual("Journey");
        expect(vehicle.year).toEqual(2015);
        expect(vehicle.honk()).toEqual("Beep.");
    });
});

describe("Car Class", () => {
    it("Creates a class derived from Vehicle having addition properties numWheels = 4", () => {
        const car = new Car("Toyota", "Celica", 1973);
        let x = car.hasOwnProperty("numWheels");
        expect(car.hasOwnProperty("numWheels")).toEqual(true);
        expect(car.make).toEqual("Toyota");
        expect(car.model).toEqual("Celica");
        expect(car.year).toEqual(1973);
        expect(car.numWheels).toEqual(4);
    });
});

describe("Motorcycle Class", () => {
    it("Creates a class derived from Vehicle having addition properties numWheels = 2 and a method revEngine()", () => {
        const motorcycle = new Motorcycle("Kawasaki", "Ninja", 2019);
        expect(motorcycle.hasOwnProperty("numWheels")).toEqual(true);
        expect(motorcycle.hasOwnProperty("revEngine")).toEqual(true);
        expect(motorcycle.make).toEqual("Kawasaki");
        expect(motorcycle.model).toEqual("Ninja");
        expect(motorcycle.year).toEqual(2019);
        expect(motorcycle.numWheels).toEqual(2);
        expect(motorcycle.revEngine()).toEqual("VROOM!!!");
    });
});

describe("Garage Class", () => {
    it("Creates a class Garage which can hold a number of vehicles and only allows instances of objects derived from Vehicle", () => {
        const garage = new Garage(1);
        const vehicle1 = new Motorcycle("Kawasaki", "Ninja", 2019);
        expect(garage.hasOwnProperty("vehicles")).toEqual(true);
        expect(garage.hasOwnProperty("add")).toEqual(true);
        expect(garage.add(vehicle1)).toEqual("Vehicle added!");
        expect(garage.add(vehicle1)).toEqual("Sorry, we're full.");
        expect(garage.add("taco")).toEqual("Only vehicles are allowed in here!");
    });
});