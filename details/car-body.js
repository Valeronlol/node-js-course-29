const Engine = require("./engine")

module.exports = class CarBody {
    parts = [Engine]

    constructor(engine) {
        this.carBody = engine
    }

    install() {
        this.carBody.install()
        this.parts.push(this.carBody)
    }

    welding() {
        this.parts.forEach(part => {
            console.log(`Welding car part: ${part.name}`)
        })
    }
}
