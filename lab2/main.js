
var ship1 = {
    name: "Majestic Mærsk",
    inService: true,
    yardNumber: 4251,
    imoNumber: 9619919,
}

var ship2 = {
    name: "Mary Mærsk",
    inService: false,
    yardNumber: 4252,
    imoNumber: 9619921,
}

var ship3 = {
    name: "Marie Mærsk",
    inService: true,
    yardNumber: 4253,
    imoNumber: 9619933,
}

var ship3 = {
    name: "Madison Mærsk",
    inService: false,
    yardNumber: 4254,
    imoNumber: 9619945,
}


var ships = [];

function add(ship)
{
    var key = getKey(ship);
    if(find(ship)) {
        console.log('ten statek jest juz dodany');
        return;
    }
    ships.push(ship)
}

function remove(entryShip)
{
    ships = ships.filter(function(ship){
       return ship.name !== entryShip.name;
    });
}

function update(entryShip)
{
    var key = getKey(entryShip);
    if(!find(entryShip)) {
        console.log('nie znalazlem takiego statku, najpierw go dodaj');
        return;
    };
    ships[key] = entryShip;
}

function getKey(ship)
{
    return ships.lastIndexOf(ship);
}

function find(entryShip, byWhat = 'name')
{
    if (typeof entryShip.byWhat !== "undefined") return;
    return ships.find(function(ship){
        return ship.byWhat == entryShip.byWhat;
    });
}

function read()
{
    console.log(ships);
}

add(ship1);
add(ship2);
add(ship3);
remove(ship1);
// ship2.name = "titanic";

// update(ship2);

// console.log(find(ship2, 'yardNumber'))

read();
