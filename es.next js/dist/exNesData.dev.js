"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// function printAddress(per) {
//   let addCity;
//   [,[,addCity,]]=per.address
//   console.log(addCity);
// }
person = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Los Angeles",
    country: "USA"
  }
};

function printAddress(obj) {
  for (var key in obj) {
    // if (typeof obj[key] === 'object') {
    //     if (obj[key].hasOwnProperty('city')) {
    //         console.log('city: ' + obj.city);
    //     } else if (Array.isArray(obj[key])) {
    //         for (let key2 in obj[key]) {
    //             printAddress(obj[key2][i]);
    //         }
    //     } else {
    //         printAddress(obj[key]);
    //     }
    // } 
    if (obj[key] && _typeof(obj[key]) === 'object' && obj[key].hasOwnProperty('city')) {
      console.log('city: ' + obj[key].city);
    }
  }
}

printAddress(person); // function printCity(obj) {
//     if (obj && typeof obj === 'object' && obj.hasOwnProperty('city')) {
//         console.log('city: ' + obj.city);
//     } 
// }
// printCity(person.address);
//# sourceMappingURL=exNesData.dev.js.map
