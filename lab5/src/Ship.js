class Ship {
    constructor(name, inService, yardNumber, imoNumber) {
        this._name = name;
        this._inService = inService;
        this._yardNumber = yardNumber;
        this._imoNumber = imoNumber;
        this._crew = 0;
    }

    getFullData() {
        return "Ship name:" + this._name + " Ship register number:" + this._imoNumber;
    };

    boardingCrew(){
        this.crew(this.crew++);
    }

    get crew() {
       return this._crew;
    }

    set crew(value){
        this._crew++
    }

    set name(value) {
        this._name = value;
    }

    set inService(value) {
        this._inService = value;
    }

    set yardNumber(value) {
        this._yardNumber = value;
    }

    set imoNumber(value) {
        this._imoNumber = value;
    }

    get name() {
        return this._name;
    }

    get inService() {
        return this._inService;
    }

    get yardNumber() {
        return this._yardNumber;
    }

    get imoNumber() {
        return this._imoNumber;
    }
}

export default Ship;