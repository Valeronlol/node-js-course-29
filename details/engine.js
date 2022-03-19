class Engine {
    constructor() {

    }

    install() {
        const carBody = require('./car-body')
        carBody.welding()
    }

    run() {
        console.log('RRRR engine run!')
    }
}

module.exports = new Engine()
