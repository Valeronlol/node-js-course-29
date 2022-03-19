class Car {
    constructor() {
        const carBody = require('./car-body')
        const engine = require('./engine')
        this.carBody = carBody
        this.engine = engine
    }

    create() {
        this.carBody.install()
        this.engine.install()

        return this
    }

    run() {
        if (!this.carBody || !this.engine) {
            throw new Error('Can\'t run car with non installed parts.')
        }

        this.engine.run()
        console.log('The car started, good luck!')
    }
}

module.exports = new Car()
