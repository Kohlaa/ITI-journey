"use strict";

function fetchData(url) {
  var res, data;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function buildDropDown() {
  var users, dropdown;
  return regeneratorRuntime.async(function buildDropDown$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchData("http://jsonplaceholder.typicode.com/users"));

        case 2:
          users = _context2.sent;
          dropdown = document.getElementById("userDropdown");
          users.forEach(function (user) {
            var option = document.createElement("option");
            option.value = user.id;
            option.text = user.name;
            dropdown.appendChild(option);
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function anableBtn() {
  document.getElementById("showImageButton").disabled = false;
}

function showImg() {
  var userId, userDetails, userDetailsDiv;
  return regeneratorRuntime.async(function showImg$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userId = document.getElementById("userDropdown").value;
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetchData("http://jsonplaceholder.typicode.com/users/".concat(userId)));

        case 3:
          userDetails = _context3.sent;
          userDetailsDiv = document.getElementById("userDetails");
          userDetailsDiv.innerHTML = "<h2>".concat(userDetails.name, "'s data</h2>");

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}

buildDropDown();
//# sourceMappingURL=fetch2.dev.js.map
