class Engine {
    constructor (carbody) {
        this.carBody = carbody
    }

    install () {
        this.carBody.welding()
    }

    run () {
        console.log('RRRR engine run!')
    }
}

module.exports = Engine
