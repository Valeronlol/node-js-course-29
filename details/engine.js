module.exports = class Engine {
  constructor(CarBody) {
    this.carBody = new CarBody(Engine);
  }

  install(parts) {
    this.carBody.welding(parts);
  }

  run() {
    console.log("RRRR engine run!");
  }
};
