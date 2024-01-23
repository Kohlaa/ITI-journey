"use strict";

function greet(name) {
  var greeting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Hello";
  var gMsg = greeting + " " + name;
  console.log(gMsg);
}

greet("mohamed");
//# sourceMappingURL=greetingMsg.dev.js.map
