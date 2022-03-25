module.exports = class Car {
  constructor(carBody, engine) {
    this.carBody = carBody;
    this.engine = engine;
  }

  create() {
    const parts = this.carBody.install();

    this.engine.install(parts);

    return this;
  }

  run() {
    if (!this.carBody || !this.engine) {
      throw new Error("Can't run car with non installed parts.");
    }

    this.engine.run();
    console.log("The car started, good luck!");
  }
};
