module.exports = class CarBody {
  parts = [];

  constructor(engine) {
    this.engine = engine;
  }

  install() {
    this.parts.push(this.engine);

    return this.parts;
  }

  welding(parts) {
    parts.forEach((part) => {
      console.log(`Welding car part: ${part.constructor.name}`);
    });
  }
};
