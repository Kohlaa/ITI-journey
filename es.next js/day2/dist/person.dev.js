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

var Person =
/*#__PURE__*/
function () {
  function Person(_name, _age) {
    _classCallCheck(this, Person);

    this.name = _name;
    this.age = _age;
  }

  _createClass(Person, [{
    key: "printData",
    value: function printData() {
      console.log(this.name, this.age);
    }
  }], [{
    key: "whoAmI",
    value: function whoAmI() {
      console.log("I'm a person");
    }
  }]);

  return Person;
}();

var Student =
/*#__PURE__*/
function (_Person) {
  _inherits(Student, _Person);

  function Student(_uni, _fa, _fg, _name, _age) {
    var _this;

    _classCallCheck(this, Student);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Student).call(this, _name, _age));
    _this.uni = _uni;
    _this.fa = _fa;
    _this.fg = _fg;
    return _this;
  }

  _createClass(Student, [{
    key: "printData",
    value: function printData() {
      console.log("".concat(this.name, " is a student in faculty of ").concat(this.fa, " in university ").concat(this.uni, "and his final grad is ").concat(this.fg));
    }
  }], [{
    key: "whoAmI",
    value: function whoAmI() {
      console.log("I'm a student");
    }
  }]);

  return Student;
}(Person);

var myMixin = {
  printName: function printName() {
    console.log(this.name);
  },
  printAge: function printAge() {
    console.log(this.age);
  }
};
Object.assign(Student.prototype, myMixin);
var s1 = new Student("m", "m", "m", "m", "m");
p1 = new Person("mm", 20);
p1.printData();
s1.printData(); // s1.name="Mohamed"

s1.printName();
var obj = {
  name: "mohamed",
  age: 22,
  email: "df@gmail.com"
};
var handler = {
  get: function get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw prop + " is not exist";
    }
  },
  set: function set(target, prop, value) {
    if (prop == "name") {
      if (typeof value != "string") {
        throw "name is not valid, must be string";
      } else if (value.length != 7) {
        throw "name must be only 7 chars";
      }
    } else if (prop == "age") {
      if (typeof value != "number") {
        throw "age must be integer";
      } else if (value < 25 || value > 60) {
        throw "age must be between 25,60";
      }
    } else if (prop == "address") {
      if (typeof value != "string") {
        throw "address must be string";
      }
    }

    target[prop] = value;
  }
};
var prox = new Proxy(obj, handler);
prox.name = "asdjhdj";
console.log(prox.name);
console.log(prox.age); // prox.age = 13;
// console.log(prox.age);
// console.log(prox.email);

prox.email = "17657@hgf";
console.log(prox.email); // console.log(prox.address);
// console.log(prox.role);
//# sourceMappingURL=person.dev.js.map
