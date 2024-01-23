"use strict";

var arr = ["Orange", 10, 3, 7, "Apple", 60, "Banana", 23, "Mango", 8];
console.log(arr.filter(function (ele) {
  return !isNaN(ele);
}));
console.log(arr.filter(function (ele) {
  return isNaN(ele);
}));
console.log(arr.filter(function (ele) {
  return isNaN(ele) && ele.startsWith("A");
})); // for (let i = 0; i < arr.length; i++) {
//       arr[i];
// }
// arr.findIndex();
//# sourceMappingURL=array.dev.js.map
