import Ship from 'Ship';

class ShipDataBase {

    constructor() {
        this.ships = [];
    }

    addShip(ship) {
        let searchShip = this.findShip(ship.imoNumber);
        if (searchShip) {
            searchShip.update(ship);
            return {'message': 'Udalo się zaktualizować dane statku'};
        }
        let inService = false;
        if (ship.inService) inService = true;
        this.ships.push(new Ship(ship.name, inService, ship.yardNumber, ship.imoNumber));
        return this;
    }

    removeShip(entryShip) {
        let search = entryShip;
        if (entryShip instanceof Ship) search = entryShip.imoNumber;
        this.ships = this.ships.filter(function (ship) {
            return ship.imoNumber != search;
        });
        return {'message': 'Udalo się usunąć statek z bazy'}
    }

    findShip(imoNumber) {
        return this.ships.find(function (ship) {
            return ship.imoNumber == imoNumber;
        });
    }

    getShips() {
        return this.ships.map((ships) => {
            return {name: ships.name, imoNumber: ships.imoNumber};
        });
    }

    findBy(criteria, value) {
        return this.ships.find(function (ship, criteria, value) {
            return ship.criteria == value;
        });
    }
}

const DataBase = new ShipDataBase()
    .addShip(new Ship("Majestic Mærsk", true, 4251, 9619919))
    .addShip(new Ship("Mary Mærsk", false, 4252, 9619921))
    .addShip(new Ship("Marie Mærsk", true, 4253, 9619933))
    .addShip(new Ship("Madison Mærsk", false, 4254, 9619945))
    .addShip(new Yacht(3, false, "Dar Młodzieży", true, 6512, 7821075));


console.log(DataBase.findShip(7821075).getFullData());

