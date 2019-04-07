"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ship =
/*#__PURE__*/
function () {
  function Ship(name, inService, yardNumber, imoNumber) {
    _classCallCheck(this, Ship);

    this._name = name;
    this._inService = inService;
    this._yardNumber = yardNumber;
    this._imoNumber = imoNumber;
  }

  _createClass(Ship, [{
    key: "getFullData",
    value: function getFullData() {
      return "Ship name:" + this._name + " Ship register number:" + this._imoNumber;
    }
  }, {
    key: "name",
    set: function set(value) {
      this._name = value;
    },
    get: function get() {
      return this._name;
    }
  }, {
    key: "inService",
    set: function set(value) {
      this._inService = value;
    },
    get: function get() {
      return this._inService;
    }
  }, {
    key: "yardNumber",
    set: function set(value) {
      this._yardNumber = value;
    },
    get: function get() {
      return this._yardNumber;
    }
  }, {
    key: "imoNumber",
    set: function set(value) {
      this._imoNumber = value;
    },
    get: function get() {
      return this._imoNumber;
    }
  }]);

  return Ship;
}();

var Yacht =
/*#__PURE__*/
function (_Ship) {
  _inherits(Yacht, _Ship);

  function Yacht(numberOfSail, isLuxury, name, inService, yardNumber, imoNumber) {
    var _this;

    _classCallCheck(this, Yacht);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Yacht).call(this, name, inService, yardNumber, imoNumber));
    _this.numberOfSail = numberOfSail;
    _this.isLuxury = isLuxury;
    return _this;
  }

  _createClass(Yacht, [{
    key: "numberOfSail",
    set: function set(value) {
      this._numberOfSail = value;
    },
    get: function get() {
      return this._numberOfSail;
    }
  }, {
    key: "isLuxury",
    set: function set(value) {
      this._isLuxury = value;
    },
    get: function get() {
      return this._isLuxury;
    }
  }]);

  return Yacht;
}(Ship);

var ShipDataBase =
/*#__PURE__*/
function () {
  function ShipDataBase() {
    _classCallCheck(this, ShipDataBase);
  }

  _createClass(ShipDataBase, [{
    key: "addShip",
    value: function addShip(ship) {
      if (this.findShip(ship)) {
        console.log('ten statek jest juz dodany');
        return;
      }

      this._ships.push(ship);
    }
  }, {
    key: "removeShip",
    value: function removeShip(entryShip) {
      this._ships = this._ships.filter(function (ship) {
        return ship.imoNumber == entryShip.imoNumber;
      });
    }
  }, {
    key: "updateShip",
    value: function updateShip(entryShip) {
      var key = this.getKey(entryShip);

      if (!this.findShip(entryShip)) {
        this.addShip(entryShip);
        return;
      }

      ;
      this._ships[key] = entryShip;
    }
  }, {
    key: "getKey",
    value: function getKey(ship) {
      return this._ships.indexOf(ship);
    }
  }, {
    key: "findShip",
    value: function findShip(entryShip) {
      return this._ships.find(function (ship) {
        return ship.imoNumber == entryShip.imoNumber;
      });
    }
  }, {
    key: "read",
    value: function read() {
      console.log(this._ships);
    }
  }]);

  return ShipDataBase;
}();

var DataBase = new ShipDataBase().addShip(new Ship("Majestic Mærsk", true, 4251, 9619919)).addShip(new Ship("Mary Mærsk", false, 4252, 9619921)).addShip(new Ship("Marie Mærsk", true, 4253, 9619933)).addShip(new Ship("Madison Mærsk", false, 4254, 9619945)).addShip(new Yacht(3, false, "Dar Młodzieży", true, 6512, 7821075));
console.log(DataBase.findShip(9619933).getFullData()); // ShipDataBase.update(ship5);
// ShipDataBase.add(ship5);
// ShipDataBase.read();
// console.log(ShipDataBase.find(ship5));
// ShipDataBase.read();
// console.log(ship5.getFullData());