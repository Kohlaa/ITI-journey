"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function copyObject(obj) {
//     // let newObj = JSON.parse(JSON.stringify(obj));
//     // return newObj;
// }
function copyObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(copyObject);
  }

  return _objectSpread({}, obj);
}

var obj = {
  name: "Mohamed",
  age: 22,
  skills: [1, 2, 3, 5]
}; // let newObj = JSON.parse(JSON.stringify(obj));

var obj1 = obj; // shallow

var obj2 = copyObject(obj); // deep

obj1.name = "ali";
obj2.age = 20;
obj.name = "Ahmed";
obj.skills = [2, 4, 6];
obj1.skills = [2, 4, 6];
console.log(obj1, obj2, obj);
//# sourceMappingURL=copyObject.dev.js.map
