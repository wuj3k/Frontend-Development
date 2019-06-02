import Ship from 'Ship';

class Yacht extends Ship {
    constructor(numberOfSail, isLuxury, name, inService, yardNumber, imoNumber) {
        super(name, inService, yardNumber, imoNumber);
        this.numberOfSail = numberOfSail;
        this.isLuxury = isLuxury;
    }

    set numberOfSail(value) {
        this._numberOfSail = value;
    }

    get numberOfSail() {
        return this._numberOfSail;
    }

    set isLuxury(value) {
        this._isLuxury = value;
    }

    get isLuxury() {
        return this._isLuxury;
    }
}

export default Yacht;