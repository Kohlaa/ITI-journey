'use strict'
// alert("Welcome to my site")
// var userName = prompt("Please enter your name:")
// var birthDate = parseInt(prompt("Please enter your birth date:"))
// var msg = "Welcome " + userName;
// document.write( msg)
alert("Welcome to my site")
hello()
// function checker (){
// while(typeof userName != "String"  || birthDate != "Number"){
//     var userName = prompt("Please enter your name:")
//     var birthDate = prompt("Please enter your birth date:")
//     var msg = "Welcome " + userName;
//     document.write( msg)
// }
// }
// function hello(){
//     var userName = prompt("Please enter your name:")
//     var birthDate = prompt("Please enter your birth date:")
//     if((typeof userName ==='String'  && birthDate === 'Number')!=true)
//        hello()
//     var msg = "Welcome " + userName;
//     document.write( msg)    
    
// }
function hello() {
    var userName = prompt("Please enter your name:");
    var birthDate = parseInt(prompt("Please enter your birth date:"));

    if (typeof userName !== 'string' || isNaN(birthDate) || birthDate >= 2010) {
        hello(); 
    } else {
        var msg = "Welcome " + userName;
        document.writeln("\nName : "+userName+"\n");
        document.writeln("Birth Year : "+birthDate+"\n");
        var age = 2023-birthDate;
        document.writeln("Age : "+age+"\n");
    }
}


function sum(num1,num2){
var num1 = prompt('enter number')
var num2 = prompt('enter another one')
    var res=parseInt(num1)+ parseInt(num2)
    console.log(parseInt(res))
    return parseInt(res)
}

function temperature(temp){
    var temp = prompt('enter the temperature')
    temp>=30?document.write("HOT"):document.write("COLD")
}

function temperature2(temp , actualFeel){
    
    var temp = prompt('enter the temperature')
    
    var actualFeel = prompt('enter the actual feel')

   if(temp > 25 && temp<30 && actualFeel>25 && actualFeel<30)
   {
    document.write( "normal")
   }
   else if(temp < 25 && actualFeel<25)
   {
    document.write( "cold")
   }
   else if(temp > 30 && actualFeel>30)
   {
    document.write( "hot")
   }
   else
   document.write( "Ambiguous, can't detect")
}

function suggestedTracks(studentFaculty){
    
    var studentFaculty = prompt('enter your faculty name')
    switch(studentFaculty) {
        case "FCI":
          alert("You're eligible to Programing tracks.")
          break;
        case "Engineering":
          alert("You're eligible to Network and Embedded tracks.")
          break;
        case "Commerce":
            alert("You're eligible to ERP and Social media tracks.")
            break;
        default:
          alert("You're eligible to SW fundamentals track.")
      }
}


function oddNums(st,en){
    
    var st = parseInt(prompt('enter the start number'))
    var en = parseInt(prompt('enter the end number'))
    for(var i=st;i<en;i++){
        if(parseInt(i)%2!=0)
            {
                console.log(parseInt(i)+" ")
                document.write(parseInt(i));
        }
    }
}

// function oddNums(st, en) {
//     var start = parseInt(prompt('Enter the start number:'));
//     var end = parseInt(prompt('Enter the end number:'));
//     for (var i = st; i < en; i++) {
//         if (i % 2 !== 0) {
//             console.log(i); // Print odd number to the console
//             document.write(i + ' '); // Display odd number on the page
//         }
//     }
// }


function exp(){
    var expr =  prompt("Enter a math expression :")
    alert("You entered : "+expr+" , and the result is : "+eval(expr))
}