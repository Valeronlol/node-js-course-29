class CarBody {
    parts = []

    install (engine) {
        this.parts.push(engine)
    }

    welding () {
        this.parts.forEach(part => {
            console.log(`Welding car part: ${part.constructor.name}`)
        })
    }
}

module.exports = CarBody
