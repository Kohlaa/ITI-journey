'use strict'
const jsTips = [
    "tip1",
    "tip2", "tip3","tip4","tip5","tip6","tip7","tip8","tip9","tip10"
];

  function displayRandomTip() {
    var randomIndex = Math.floor(Math.random() * jsTips.length);
    return jsTips[randomIndex];
  }
  alert(displayRandomTip());

  function Format(){
    alert(Date());
  }

  function showDate() {
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString();
  
    // Display the formatted date and time on the page
    const displayArea = document.getElementById('currentDateTime');
    if (displayArea) {
      displayArea.textContent = formattedDateTime;
    }
    alert(Date())
  }
  


  function checkEmail() {
    const userEmail = prompt("Please enter your email:");
    
    if (userEmail.indexOf('@') !== -1 && userEmail.indexOf('@') !== 0 && userEmail.indexOf('@') !== (userEmail.length - 1)) {
      console.log("Email is valid!");
    } else {
      console.log("Please enter a valid email!");
      checkEmail()
    }
  }


var studentGrades = [60, 100, 10, 15, 85];

studentGrades.sort((a,b)=>b-a);
// studentGrades.reverse();

console.log("Highest degree :", studentGrades[0]);

// first <= 100

for(var i of studentGrades){
   if(i<100){
    console.log(i+" ")
    break
   }
}
// find

console.log(studentGrades.find(grade => grade < 100))

// filter

console.log("Grades below 60 >>> "+studentGrades.filter(grade => grade < 60))


var students = [
    { Name: "Mohamed", Degree: 100 },
    { Name: "Ali", Degree: 95 },
    { Name: "Ahmed", Degree: 90 },
    { Name: "Kohla", Degree: 50 }
  ];
  
  var stu90To100 = students.find(student => student.Degree >= 90 && student.Degree <= 100);
  console.log("90 to 100:", stu90To100 ? stu90To100.Name : "Not found");
  
  var lessThan60 = students.filter(student => student.Degree < 60);
  console.log("less than 60:", lessThan60.map(student => student.Name ));
  
  var newStudent = { Name: "Mahmoud", Degree: 55 };
  students.push(newStudent);
  
  for (var index in students) {
    console.log(students[index]);
  }
  //////  in X of 
  console.log("\nof\n");
  for(var idx of students){
    console.log(idx);
  }
  students.pop();
  
//   for (var student of students) {
//     console.log(student);
//   }
  
  students.sort((a, b) => a.Name.localeCompare(b.Name));
  console.log("Sorted array >> ", students);
  

  var newStudents = [
    { Name: "hassan", Degree: 75 },
    { Name: "ayman", Degree: 90 }
  ];

  students.splice(2, 0, ...newStudents);
  students.splice(4, 1);

  for (var student of students) {
        console.log(student);
      }

// function checkDateFormat(input) {
//   if (input.length !== 10) {
//     return false;
//   }

//   if (input.charAt(2) !== '-' || input.charAt(5) !== '-') {
//     return false;
//   }

//   return true;
// }

// function Format2() {
//   const userInput = document.getElementById('birthdate').value.trim();

//   if (checkDateFormat(userInput)) {
//     const [day, month, year] = userInput.split('-').map(Number);

//     const date = new Date(year, month - 1, day);
//     const dateString = date.toDateString();

//     alert(`Your birth date is: ${dateString}`);
//   } else {
//     alert('Wrong Date Format');
//   }
// }

///////////


  