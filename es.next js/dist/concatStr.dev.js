"use strict";

function concanStrs(str) {
  var _ref;

  var res = "";

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1) - 1; i++) {
    res = res + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) + str;
  }

  res += (_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref < 1 || arguments.length <= _ref ? undefined : arguments[_ref]);
  return res;
}

console.log(concanStrs("#", "mohamed", "ali", "kohla"));
//# sourceMappingURL=concatStr.dev.js.map
