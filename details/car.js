const CarBody = require('./car-body')
const Engine = require('./engine')

module.exports = class Car {
    constructor () {
        this.carBody = new CarBody(Engine)
        this.engine = new Engine(this.carBody)
    }

    create () {
        this.carBody.install()
        this.engine.install()

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
