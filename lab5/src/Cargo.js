import Ship from 'Ship';

class Cargo extends Ship
{
    constructor(capacity,freeSpace, isLuxury, name, inService, yardNumber, imoNumber) {
        super(name, inService, yardNumber, imoNumber);
        this.capacity = capacity;
        this.freeSpace = freeSpace;
    }

    set capacity(value) {
        this._capacity= value;
    }

    get capacity() {
        return this._capacity;
    }

    set freeSpace(value) {
        this._freeSpace= value;
    }

    get freeSpace() {
        return this._freeSpace;
    }

    loadShip(howMany){
        if(!this.isFull(howMany)) this.freeSpace(this.freeSpace - howMany);
    }

    isFull(howMany){
        return this.freeSpace >= howMany;
    }
}

export default Cargo;