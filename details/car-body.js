class CarBody {
    parts = []

    constructor() {

    }

    install() {
        const engine = require('./engine')
        engine.install()
        this.parts.push(engine)
    }

    welding() {
        this.parts.forEach(part => {
            console.log(`Welding car part: ${part.constructor.name}`)
        })
    }
}

module.exports = new CarBody()
