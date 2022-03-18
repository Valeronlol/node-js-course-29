const CarBody = require('./car-body')
const Engine = require('./engine')

class Car {
    constructor () {
        this.engine = new Engine()
        this.carBody = new CarBody()
    }

    create () {
        this.carBody.install(this.engine)
        this.carBody.welding()

        return this
    }

    run () {
        if (!this.carBody || !this.engine) {
            throw new Error('Can\'t run car with non installed parts.')
        }

        this.engine.run()
        console.log('The car started, good luck!')
    }
}

module.exports = Car
