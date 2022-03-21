module.exports = class CarBody {
    parts = []

    constructor (Engine) {
        this.engine = new Engine(this)
    }

    install () {
        this.engine.install()
        this.parts.push(this.engine)
    }

    welding () {
        this.parts.forEach(part => {
            console.log(`Welding car part: ${part.constructor.name}`)
        })
    }
}
