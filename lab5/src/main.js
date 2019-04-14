// TODO 
// 1.wyexportowac wszystkie klasy
// 2.dodac cargo oraz pasazerski
// 3. zmienic update funkcje, wrzucic imonumber oraz tablice z nowymi zmiennymi
// 4. wypitolic getkey funkcje
// 5. dodac jakas extra, dwie trzy funkcje zawansowane na obiektach
// 6. dodac unikalnosc imonumber
// 7. funckej czynosci, ile kilometrow przeplynietych, funkcje rejsu.
// 8. zmienic funkcje read na get info

class Ship {
    constructor(name, inService, yardNumber, imoNumber) {
        this._name = name;
        this._inService = inService;
        this._yardNumber = yardNumber;
        this._imoNumber = imoNumber;
    }

    getFullData() {
        return "Ship name:" + this._name + " Ship register number:" + this._imoNumber;
    };

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

class ShipDataBase {

    constructor() {
        this._ships = [];
    }

    addShip(ship) {
        if (this.findShip(ship)) {
            console.log('ten statek jest juz dodany');
            return;
        }
        this._ships.push(ship)
        return this;
    }

    removeShip(entryShip) {
        this._ships = this._ships.filter(function (ship) {
            return ship.imoNumber == entryShip.imoNumber;
        });
    }

    updateShip(entryShip) {
        var key = this.getKey(entryShip);
        if (!this.findShip(entryShip)) {
            this.addShip(entryShip);
            return;
        };
        this._ships[key] = entryShip;
    }

    getKey(ship) {
        return this._ships.indexOf(ship);
    }

    findShip(entryShip) {
        let search = entryShip;
        if (entryShip instanceof Ship) search = entryShip.imoNumber;
        return this._ships.find(function (ship) {
            return ship.imoNumber == search;
        });
    }

    read() {
        console.log(this._ships);
    }
}

const DataBase = new ShipDataBase()
    .addShip(new Ship("Majestic Mærsk", true, 4251, 9619919))
    .addShip(new Ship("Mary Mærsk", false, 4252, 9619921))
    .addShip(new Ship("Marie Mærsk", true, 4253, 9619933))
    .addShip(new Ship("Madison Mærsk", false, 4254, 9619945))
    .addShip(new Yacht(3, false, "Dar Młodzieży", true, 6512, 7821075));


console.log(DataBase.findShip(7821075).getFullData());

