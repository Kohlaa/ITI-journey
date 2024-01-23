document.getElementById('btnPrsd').addEventListener('mousedown', (event) => {
  alert(`Key code pressed:  ${event.button}`);
});
let clockInterval;

function clock() {
  alert("Clock Started")
  displayTime();
  clockInterval = setInterval(displayTime, 1000);
  document.addEventListener('keydown', stopClockOnShortcut);
}

function displayTime() {
  const now = new Date();
  const hours = now.getHours().toString();
  const minutes = now.getMinutes().toString();
  const seconds = now.getSeconds().toString();
  const time = hours + ':' + minutes + ':' + seconds;

  document.getElementById('clockDisplay').innerText = time;
}


function stopClockOnShortcut() {
  document.addEventListener('keydown', (event) => {
    // alert(`Key code pressed:  ${event.key}`);
    if (event.altKey && (event.key == "w" || event.key == "W")) {
      // alert("stopped")
      clearInterval(clockInterval);
    }
  });
}

document.getElementById('onlyStr').addEventListener('keydown', (event) => {
  if (!(/^[A-Za-z]$/).test(event.key)) {
    alert("Wrong input , don't use numbers")
    event.preventDefault();
  }
});


// function mouseOver(){
//   document.addEventListener('mouseover', () => {
//       alert("mouseover")
//   });
// }



var flag = true;
var imgIntervar;
var i = 0;
var imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
document.images[0].src = imgs[0];

function Toggle() {
  flag = !flag;
  if (flag == false) {
    i++;
    imgIntervar = setInterval(() => {
      if (i >= imgs.length) {
        i = 0;
      }
      console.log(i)
      document.images[0].src = imgs[i];
      i++;
    }, 500);
  }
  else {
    clearInterval(imgIntervar);
    i--;
  }
}

function prev() {
  i--;
  if (i < 0) {
    i = imgs.length - 1;
  }
  console.log(i)
  document.images[0].src = imgs[i];
}

function next() {
  i++;
  if (i >= imgs.length) {
    i = 0;
  }
  console.log(i)
  document.images[0].src = imgs[i];
}





const images = document.querySelectorAll('.gallery-img');

images.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.opacity = '0.3';
  });

  img.addEventListener('mouseout', () => {
    img.style.opacity = '1';
  });
});
