
fetch("http://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

async function getData() {
  try {
    let response = await fetch("http://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error:", error);
  }
}
getData();



// fetch("http://jsonplaceholder.typicode.com/users", {
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