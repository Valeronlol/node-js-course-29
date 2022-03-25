const Car = require("./details/car");
const CarBody = require("./details/car-body");
const Engine = require("./details/engine");

const engine = new Engine(CarBody);
const carBody = new CarBody(engine);
const car = new Car(carBody, engine);

car.create().run();
