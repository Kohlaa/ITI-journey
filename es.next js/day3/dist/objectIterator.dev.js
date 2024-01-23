"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// // let arr = [2, 6, 84, 27, 45];
// function objectIter(obj) {
//     obj[Symbol.iterator] = function () {
//         let counter = -1;
//         return {
//             next() {
//                 counter++;
//                 if (counter < obj.length) {
//                     return {
//                         value: obj[counter],
//                         done: false,
//                     };
//                 } else {
//                     return {
//                         value: undefined,
//                         done: true,
//                     };
//                 }
//             },
//         };
//     };
// }
// objectIter(arr);
// // 
var oblec = _defineProperty({
  name: "ads",
  age: 13
}, Symbol.iterator, function () {
  var counter = -1;
  var keys = Object.keys(this);
  console.log(keys);
  var vals = Object.values(this);
  return {
    next: function next() {
      counter++;

      if (counter < keys.length) {
        return {
          value: "".concat(keys[counter], " ").concat(vals[counter], " "),
          done: false
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = oblec[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var ele = _step.value;
    console.log(ele);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
//# sourceMappingURL=objectIterator.dev.js.map
