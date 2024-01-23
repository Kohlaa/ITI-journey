"use strict";

fetch("http://jsonplaceholder.typicode.com/users", {
  method: "GET"
}).then(function (res) {
  return res.json();
}).then(function (data) {
  console.log(data);
})["catch"](function (error) {
  console.error("Fetch error:", error);
});

function getData() {
  var response, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("http://jsonplaceholder.typicode.com/users", {
            method: "GET"
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          console.log(data);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error("error:", _context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

getData(); // fetch("http://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//   })
//   .then((res) => {
//     // displayUsers();
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// async function getData() {
//   let response = await fetch("http://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//   });
//   let data = await response.json();
//   console.log(data);
// }
// let mp = new Map();
// mp.set("mohamed", {
//   Grades: [{
//     Coursename: "JavaScript",
//     Grade: "Excellent"
//   }, ]
// });
// mp.set("ali", {
//   Grades: [{
//     Coursename: "Jquery",
//     Grade: "Good"
//   }, ]
// }, );
// mp.set("kohla", {
//   Grades: [{
//     Coursename: "CSS",
//     Grade: "V.Good"
//   }, ]
// });
// // for (let key of mp) {
// //     for (key2 of key[1].Grades) {
// //         console.log(key[0] + ":", key2.Coursename, key2.Grade);
// //     }
// // }
// function displayUsers() {
//   let dropdown = document.querySelector("#student-dropdown");
//   let showImg = document.querySelector("#disBut");
//   for (let selectedName of mp.keys()) {
//     let op = document.createElement("option");
//     op.value = selectedName;
//     op.textContent = selectedName;
//     dropdown.appendChild(op);
//   }
//   // change()
//   dropdown.addEventListener("change", () => {
//     getData();
//     document.getElementById("disBut").disabled =false
//   });
//   showImg.addEventListener("click", () => {
//     change()
//   });
//   function change() {
//     let selectedName = dropdown.value;
//     let studentGrade = mp.get(selectedName);
//     let gradesDiv = document.querySelector("#disBut");
//     gradesDiv.innerHTML = "";
//     for (let grade of studentGrade.Grades) {
//       let p = document.createElement("p");
//       p.textContent = `Course Name: ${grade.Coursename}, Grade: ${grade.Grade}`;
//       gradesDiv.appendChild(p);
//     }
//   }
// }
//# sourceMappingURL=fetch.dev.js.map
