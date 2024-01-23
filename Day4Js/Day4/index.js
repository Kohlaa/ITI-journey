// function displayMsg(e){

//     //console.log(e.button);
//     //console.log(e.altKey);
//     if(e.altKey==true && e.button==2)
//     {
//         alert("You Press alt Key with Right Click")
//     }
//     else{
//         alert("Please Enter Right Keys")
//     }

// }

// function changeBg(evt)
// {
//    // console.log(evt);

//   if(evt.altKey==true && evt.key=="w")
//   {
//      document.bgColor="blue"
//   }

// }

//2
// document.getElementById("myH1").onclick = function () {
//     alert("2")
// }


// //3
// document.getElementById("myH1").addEventListener("click", function () {
//     alert("3")

// })
////////////////////////////////////

// function test () {
//    console.log("Add Event");
// }

// document.getElementById("myH1").addEventListener("click",test )

// setTimeout(function(){
//     document.getElementById("myH1").removeEventListener("click", test)

// },2000)

//////////////////////////////////////////////////////////////
///bubbling and Capturing 
// document.getElementById("red").addEventListener("click",function(){
//     alert("Red")
// })

// document.getElementById("blue").addEventListener("click",function(e){
//     alert("Blue")
//     e.stopPropagation();
// })

// document.getElementById("yellow").addEventListener("click",function(e){
//     alert("Yellow")
//     e.stopPropagation();
// })

// document.title="ITI"


// document.getElementById("myH1").addEventListener("click",function(){
//     console.log("ITI");
// })


// document.getElementsByTagName("h1")[0].addEventListener("click",function(){
//     console.log("ITI");
// })

// console.log(document.getElementById("myH1"));
// console.log(document.getElementsByTagName("h1")[0]);
// console.log(document.getElementsByClassName("myDiv")[0]);
// console.log(document.getElementsByName("fname")[0]);

// console.log(document.querySelector("#myH1"));
// console.log(document.querySelectorAll(".myDiv")[0]);
/////////////////////////////////////
// function changeText(){

// //  document.getElementsByTagName("h1")[0].innerHTML="<i>JavaScript</i>"
//  //document.getElementsByTagName("h1")[0].innerText="<i>JavaScript</i>"
//  //document.getElementsByTagName("h1")[0].textContent="JavaScript"

// }

// document.getElementById("myH").addEventListener("click",function(){
//     this.innerHTML="<i>JavaScript</i>"
// //  //document.getElementsByTagName("h1")[0].innerText="<i>JavaScript</i>"
// //  //document.getElementsByTagName("h1")[0].textContent="JavaScript"
// this.style.background="green"
// this.style.color="white"

// })
var timer
var i = 0;

function slider() {
    //console.log(document.images);
    var imgs = ["1.jpg ", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

    timer = setInterval(function () {

        if (i>=5) {
            i = 0;
        }
       
        document.images[0].src = imgs[i]
        i++;
    }, 2000)
}
