const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4001;
const cors = require('cors');

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

class Ship {
    constructor(name, inService, yardNumber, imoNumber) {
        this.name = name;
        this.inService = inService ? 'Tak' : 'Nie';
        this.yardNumber = yardNumber;
        this.imoNumber = imoNumber;
    }

    getFullData() {
        return "Ship name:" + this.name + " Ship register number:" + this.imoNumber;
    };

    update(newShip) {
        this.inService = newShip.inService;
        this.name = newShip.name;
        this.yardNumber = newShip.yardNumber;
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
app.post('/api/ship/new', (req, res) => res.send(DataBase.addShip(req.body))); // dodawanie statków
app.put('/api/ship/edit', (req, res) => res.send(DataBase.addShip(req.body))); // update statków

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

