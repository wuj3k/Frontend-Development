var ShipDataBase = (function () {
    var ships = [];

    function addShip(ship) {
        if (findShip(ship)) {
            console.log('ten statek jest juz dodany');
            return;
        }
        ships.push(ship)
    }

    function removeShip(entryShip) {
        ships = ships.filter(function (ship) {
            return ship.name !== entryShip.name;
        });
    }

    function updateShip(entryShip) {
        var key = getKey(entryShip);
        if (!findShip(entryShip)) {
            addShip(entryShip);
            return;
        };
        ships[key] = entryShip;
    }

    function getKey(ship) {
        return ships.indexOf(ship);
    }

    function findShip(entryShip) {

        return ships.find(function (ship) {
            return ship.imoNumber == entryShip.imoNumber;
        });
    }

    return {

        add: addShip,
        remove: removeShip,
        update: updateShip,
        find: findShip,

        read: function () {
            console.log(ships);
        }
    }
})();

function Ship(name, inService, yardNumber, imoNumber) {
    this.name = name;
    this.inService = inService;
    this.yardNumber = yardNumber;
    this.imoNumber = imoNumber;
}

var ship1 = new Ship("Majestic Mærsk", true, 4251, 9619919);
var ship2 = new Ship("Mary Mærsk", false, 4252, 9619921);
var ship3 = new Ship("Marie Mærsk", true, 4253, 9619933);
var ship4 = new Ship("Madison Mærsk", false, 4254, 9619945);

ShipDataBase.add(ship1);
ShipDataBase.add(ship2);
ShipDataBase.add(ship3);
ShipDataBase.add(ship4);

Ship.prototype.getFullData = function () {
    return "Ship name:" + this.name + " Ship register number:" + this.imoNumber;
};

function Yacht(numberOfSail, isLuxury, name, inService, yardNumber, imoNumber) {
    Ship.call(this, name, inService, yardNumber, imoNumber);
    this.numberOfSail = numberOfSail;
    this.isLuxury = isLuxury;
}

Yacht.prototype = Object.create(Ship.prototype);
Yacht.prototype.constructor = Yacht;

var ship5 = new Yacht(3, false, "Dar Młodzieży", true, 6512, 7821075);
// ship5.getFullData;
// ShipDataBase.add(ship5);
ShipDataBase.update(ship5);
ShipDataBase.add(ship5);
ShipDataBase.read();

// console.log(ShipDataBase.find(ship5));
// ShipDataBase.read();
// console.log(ship5.getFullData());
