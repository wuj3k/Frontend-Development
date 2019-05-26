const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4001;
const cors = require('cors');

class ShipDataBase {

    constructor() {
        this._ships = [];
    }

    addShip(ship) {
        let searchShip = this.findShip(ship);
        if (searchShip) {
            searchShip.update(ship);
            return { 'message': 'Udalo się zaktualizować dane statku' };
        }
        this._ships.push(ship)
        return this;
    }

    removeShip(entryShip) {
        let search = entryShip;
        if (entryShip instanceof Ship) search = entryShip.imoNumber;
        this._ships = this._ships.filter(function (ship) {
            return ship.imoNumber != search;
        });
        return { 'message': 'Udalo się usunąć statek z bazy' }
    }

    findShip(entryShip) {
        let search = entryShip;
        if (entryShip instanceof Ship) search = entryShip.imoNumber;
        return this._ships.find(function (ship) {
            return ship.imoNumber == search;
        });
    }

    getShips() {
        return this._ships;
    }

    findBy(name, value) {
        return this._ships.find(function (ship) {
            return ship.name == value;
        });
    }
}

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

    update(newShip) {
        this._inService = newShip.inService;
        this._name = newShip.name;
        this._yardNumber = newShip.yardNumber;
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




app.use(bodyParser.json());
app.use(cors());
const DataBase = new ShipDataBase()
    .addShip(new Ship("Majestic Mærsk", true, 4251, 9619919))
    .addShip(new Ship("Mary Mærsk", false, 4252, 9619921))
    .addShip(new Ship("Marie Mærsk", true, 4253, 9619933))
    .addShip(new Ship("Madison Mærsk", false, 4254, 9619945));

app.get('/api/', (req, res) => res.send('Hello World!'));
app.get('/api/list', (req, res) => res.send(DataBase.getShips())); // lista statków
app.get('/api/ship/:imoNumber', (req, res) => res.send(DataBase.findShip(req.params.imoNumber))); // znajdowanie statków
app.get('/api/ship/', (req, res) => res.send(DataBase.findBy(req.params.name, req.params.value))); // znajdowanie statków po parametrze
app.delete('/api/ship/:imoNumber', (req, res) => res.send(DataBase.removeShip(req.params.imoNumber))); // usuwanie statków
app.post('/api/ship/new', (req, res) => res.send(DataBase.addShip(req.params))); // dodawanie statków
app.put('/api/ship/edit', (req, res) => res.send(DataBase.addShip(req.params))); // update statków

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

