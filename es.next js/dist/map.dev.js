"use strict";

var mp = new Map();
mp.set("mohamed", {
  Grades: [{
    Coursename: "JavaScript",
    Grade: "Excellent"
  }]
});
mp.set("ali", {
  Grades: [{
    Coursename: "Jquery",
    Grade: "Good"
  }]
});
mp.set("kohla", {
  Grades: [{
    Coursename: "CSS",
    Grade: "V.Good"
  }]
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = mp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var key = _step.value;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = key[1].Grades[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        key2 = _step4.value;
        console.log(key[0] + ":", key2.Coursename, key2.Grade);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
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

var dropdown = document.querySelector("#student-dropdown");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = mp.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var selectedName = _step2.value;
    var op = document.createElement("option");
    op.value = selectedName;
    op.textContent = selectedName;
    dropdown.appendChild(op);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

change();
dropdown.addEventListener("change", function () {
  change();
});

function change() {
  var selectedName = dropdown.value;
  var studentGrade = mp.get(selectedName);
  var gradesDiv = document.querySelector("#student-grades");
  gradesDiv.innerHTML = "";
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = studentGrade.Grades[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var grade = _step3.value;
      var p = document.createElement("p");
      p.textContent = "Course Name: ".concat(grade.Coursename, ", Grade: ").concat(grade.Grade);
      gradesDiv.appendChild(p);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}
//# sourceMappingURL=map.dev.js.map
