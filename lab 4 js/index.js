


// prompt("Enter your fullname")
// const userEmail = prompt("Please enter your email:");

var namePattern = /^[A-Za-z]{4,}(?: [A-Za-z]{3,})+$/;
var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+(?:\.com\.eg|\.net\.eg|\.edu\.eg|\.org\.eg)$/;

function getValidName() {
    //   var fullName;
    //   while (true) {
    //     fullName = prompt("Please enter your full name:");
    //     if (namePattern.test(fullName)) {
    //       return fullName;
    //     } else {
    //       alert("Invalid full name format. Please try again.");
    //     }
    //   }

    var fullName;
    while (1) {
        try {
            fullName = prompt("Please enter your full name:");
            if (!namePattern.test(fullName)) {
                throw new Error("Invalid full name format. Please try again.");
            }
            return fullName;
        } catch (error) {
            alert(error.message);
        }
    }
}



//


// function checkEmail() {
//     const userEmail = prompt("Please enter your email:");

//     if (userEmail.indexOf('@') !== -1 && userEmail.indexOf('@') !== 0 && userEmail.indexOf('@') !== (userEmail.length - 1)) {
//       console.log("Email is valid!");
//     } else {
//       console.log("Please enter a valid email!");
//       checkEmail()
//     }
//   }


//
function getValidEmail() {
    // var email;
    // while (true) {
    //     email = prompt("Please enter your email address:");
    //     if (emailPattern.test(email)) {
    //         return email;
    //     } else {
    //         alert("Invalid email format. Please use an Egyptian domain (e.g., .com.eg, .net.eg, .edu.eg, .org.eg).");
    //     }
    // }
    var email;
    while (1) {
        try {
            email = prompt("Please enter your email address:");
            if (!emailPattern.test(email)) {
                throw new Error("Invalid email format. Please use an Egyptian domain (e.g., .com.eg, .net.eg, .edu.eg, .org.eg).");
            }
            return email;
        } catch (error) {
            alert(error.message);
        }
    }
}

// Prompting users for input
// var validName = getValidName();
// var validEmail = getValidEmail();

// alert("Valid name: " + validName);
// alert("Valid email: " + validEmail);




try {
    var validName = getValidName();
    var validEmail = getValidEmail();

    alert("Valid name: " + validName);
    alert("Valid email: " + validEmail);
} catch (e) {
    alert("An error occurred: " + e.message);
}









// let myWin = null;
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('adlink').addEventListener('click', function (e) {
//         e.preventDefault();
//         setTimeout(function () {
//             myWin = window.open('welcome.html', 'advertising');
//         }, 3000);
//     });
// })


// let myWindow;
// function openWin() {
//     setTimeout(() => {
//         myWindow = window.open('welcome.html', '_blank', "width=600, height=400");
//     }, 3000)
// }
// function closeWin() {
//     myWindow.close();
//   }




let myWindow;

function openWin() {
    setTimeout(() => {
        myWindow = window.open('welcome.html', '_blank', 'width=600, height=400');
    }, 3000);
}
function closeWindow(){
       window.close()
}
// function closeWin() {
//     if (myWindow && !myWindow.closed) {
//         myWindow.close();
//     } else {
//         alert('Window is not open yet or has been closed');
//     }
// }




// document.addEventListener('DOMContentLoaded', function () {
// document.getElementById('removelink').addEventListener('click', function () {
//     e.preventDefault();
//     myWin.close()
// });
// })









// document.getElementById('removelink').addEventListener('click', function (e) {
//     e.preventDefault()
//     window.close()
// })















// function getData(){
//     var urlParams = new URLSearchParams(window.location.search);
//     var username = urlParams.get('username');
//     console.log(username+"  " + urlParams)
//     document.write(username)
//     if (username) {
//     const welcomeDiv = document.getElementById('welcomeMessage');
//     const welcomeText = document.createElement('p');
//     welcomeText.innerHTML = `<strong><big>Welcome ${username}</big></strong>`;
//     welcomeDiv.appendChild(welcomeText);
//   }

// }
// function getData(){
//     // const urlParams = new URLSearchParams(window.location.search);
//     // const username = urlParams.get('username');

//     // // Display a welcome message with the username in bold and big font
//     // document.write('<h1>Welcome <span style="font-weight:bold; font-size: 24px;">' + username + '</span>!</h1>');
//     // const queryString = window.location.search;
//     // const urlParams = new URLSearchParams(queryString);
//     // const username = urlParams.get('username');

//     // // Display a welcome message with the username in bold and big font
//     // document.write('<h1>Welcome <span style="font-weight:bold; font-size: 24px;">' + username + '</span>!</h1>');






//   // Function to extract the username from the URL query parameters
//   function getParameterByName(name, url = window.location.href) {
//     name = name.replace(/[\[\]]/g, '\\$&');
//     const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//     results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
//   }

//   // Get the username from the URL query parameters
//   const username = getParameterByName('username');

//   // Display a welcome message with the username in bold and big font
//   document.write('<h1>Welcome <span style="font-weight:bold; font-size: 24px;">' + username + '</span>!</h1>');
// }



// let adWindow;

// function openAdWindow() {
//     // Open a new window after a delay of 3 seconds
//     setTimeout(function () {
//         adWindow = window.open('', '_blank');
//     }, 3000);
// }

// function closeAdWindow() {
//     // Close the advertising window if it exists
//     if (adWindow && !adWindow.closed) {
//         adWindow.close();
//     }
// }