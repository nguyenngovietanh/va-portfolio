let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

const toggle = document.getElementById("toggle");
const toggleLine = document.getElementById("toggle-line");
const toggleIcon = document.getElementById("toggle-icon");
const navigation = document.getElementById("navigation");
const arrow = document.getElementById("arrow");
toggle.onclick = () => {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    toggleLine.classList.toggle("active");
    arrow.classList.toggle("active");
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar-hide").style.opacity = "1";
  } else {
    document.getElementById("navbar-hide").style.opacity = "0";
  }
}

let football = document.getElementById("football");
let basketball = document.getElementById("basketball");
let travel = document.getElementById("travel");
let coffee = document.getElementById("coffee");
let podcast = document.getElementById("podcast");
let overlayImg = document.getElementById("overlay-img");
let overlayDescription = document.getElementById("overlay-description");
let hobbiesDivier = document.getElementById("hobbies-divier");
let overlayContent = document.getElementById("overlay-content");
let overlay = document.getElementById("overlay");

const arrHobbies = ['football', 'basketball', 'travel', 'coffee', 'podcast']; 

const arrOverlayImg = [
  './assets/images/Hobbies/football-bu.jpg', 
  './assets/images/Hobbies/basketball-bu.jpg', 
  './assets/images/Hobbies/travel-bu.jpg', 
  './assets/images/Hobbies/coffee-bu.jpg', 
  './assets/images/Hobbies/podcast.jpg',

]; 
const arrHobbiesDescript = [
  'I\'ve been playing football since I was a kid. It helps me to connect with many great friends and enjoy the game.',
  'After football, basketball is also my favorite sport. This sport also gives me the opportunity to connect with so many amazing people.',
  'I have always loved exploring new lands. Travelling takes us out of our comfort zones and inspires us to see, taste and try new things.',
  'My hobby in my free time is going to quiet cafes that I know in Hanoi. The familiar seat with the signature cup of coffee there always gives me a feeling of peace and comfort.',
  'Instead of reading books, listening to podcasts helps me absorb knowledge more easily. There\'s a lot of good content on podcast platforms and I feel it makes me feel good.'
];

const arrayHD = () => {
  const descriptionHobbies = [];
  const listOverlayImg = [];
  for(let i=0; i<5; i++) {
    console.log(listOverlayImg)
    descriptionHobbies[arrHobbies[i]] = arrHobbiesDescript[i];
    listOverlayImg[arrHobbies[i]] = arrOverlayImg[i];
  }

  return descriptionHobbies;
}

// tuan viet

const arrayImg = () => {
  const listOverlayImg = [];
  for(let i=0; i<5; i++) {
    listOverlayImg[arrHobbies[i]] = arrOverlayImg[i];
  }

  return listOverlayImg;
}
// end tuan

function removeElementFromArray(arr, element) {
  const newArray = [...arr]; // Tạo một bản sao của mảng gốc

  const index = newArray.indexOf(element);
  if (index !== -1) {
    newArray.splice(index, 1); // Xóa phần tử khỏi mảng tạm
  }

  return newArray; // Trả về mảng tạm mới
}

const changeActive = (targetId) => {
  if (!targetId.classList.contains('active-hobbies')) {
    targetId.classList.add('active-hobbies');
  }
  const tempArray = removeElementFromArray(arrHobbies, targetId.id);
  tempArray.map(function (item) {
    const targetId = document.getElementById(item);

    return targetId.classList.remove('active-hobbies');
  });
}

document.addEventListener('click', (e) => {
  let arr = arrayHD();
  // tuan viet
  let arrImg = arrayImg();
  const targetImgId = document.getElementById(e.target.id);
  let divImg = document.getElementById('overlay-img');

  console.log('targeteimgid',targetImgId)
  console.log('imgitem', arrImg[e.target.id])
  console.log('arrOverlayImg',arrOverlayImg)
  console.log('e.target.id', e.target.id)
  console.log('divImg', divImg)

  if (arrOverlayImg.includes(arrImg[e.target.id])) {
    console.log(1)
    overlayImg.src = '';
    overlayImg.src = arrImg[e.target.id];
  }
  // end tuan
  
  var text = document.createTextNode(arr[e.target.id]);
  const targetId = document.getElementById(e.target.id);

  if (arrHobbies.includes(e.target.id)) {
    overlayDescription.innerHTML = '';
    overlayDescription.appendChild(text);
    changeActive(targetId); 
  }

  let position = body.className.search('lightmode');
});

let themeSong = document.getElementById("theme-song");
let playThemeSong = document.getElementById("play-theme-song");
let waveLine1 = document.getElementById("wave-line-1");
let waveLine2 = document.getElementById("wave-line-2");
let waveLine3 = document.getElementById("wave-line-3");
let waveLine4 = document.getElementById("wave-line-4");
let waveLine5 = document.getElementById("wave-line-5");
let waveLine6 = document.getElementById("wave-line-6");
let waveLine7 = document.getElementById("wave-line-7");
let waveLine8 = document.getElementById("wave-line-8");

playThemeSong.onclick = function() {
  if(themeSong.paused) {
    themeSong.play();
    waveLine1.style.animation = "wave 1.2s linear 0s infinite";
    waveLine2.style.animation = "wave 1.2s linear 0.3s infinite";
    waveLine3.style.animation = "wave 1.2s linear 0.6s infinite";
    waveLine4.style.animation = "wave 1.2s linear 0.9s infinite";
    waveLine5.style.animation = "wave 1.2s linear 0.6s infinite";
    waveLine6.style.animation = "wave 1.2s linear 0.3s infinite";
    waveLine7.style.animation = "wave 1.2s linear 0s infinite";
    waveLine8.style.animation = "wave 1.2s linear 0.3s infinite";
    waveLine1.style.background = "#f5b32f";
    waveLine2.style.background = "#f5b32f";
    waveLine3.style.background = "#f5b32f";
    waveLine4.style.background = "#f5b32f";
    waveLine5.style.background = "#f5b32f";
    waveLine6.style.background = "#f5b32f";
    waveLine7.style.background = "#f5b32f";
    waveLine8.style.background = "#f5b32f";
  } else {
    themeSong.pause();
    waveLine1.style.animation = "none";
    waveLine1.style.background = "#ffffff";
    waveLine1.style.height = "12px";
    waveLine2.style.animation = "none";
    waveLine2.style.background = "#ffffff";
    waveLine2.style.height = "18px";
    waveLine3.style.animation = "none";
    waveLine3.style.background = "#ffffff";
    waveLine3.style.height = "16px";
    waveLine4.style.animation = "none";
    waveLine4.style.background = "#ffffff";
    waveLine4.style.height = "10px";
    waveLine5.style.animation = "none";
    waveLine5.style.background = "#ffffff";
    waveLine5.style.height = "14px";
    waveLine6.style.animation = "none";
    waveLine6.style.background = "#ffffff";
    waveLine6.style.height = "18px";
    waveLine7.style.animation = "none";
    waveLine7.style.background = "#ffffff";
    waveLine7.style.height = "16px";
    waveLine8.style.animation = "none";
    waveLine8.style.background = "#ffffff";
    waveLine8.style.height = "12px";
  }
}

const body = document.querySelector('body');
const statusMode = document.querySelector('#status-mode');
const modeBtn = document.querySelector('.mode-btn');
const lightModeDescription = document.querySelector(".toggle__status-mode-container--description");

statusMode.addEventListener('click', (e) => {
  body.classList.toggle('lightmode');
})

function Appear() {
  var summaryContent = document.querySelector('.summary-content__bio');
  var summaryContentPosition = summaryContent.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;
  if(summaryContentPosition < screenPosition) {
    summaryContent.classList.add('appear');
  } 
}

function boxAppear() {
  var educationBox = document.querySelector('.education-box');
  var educationBoxPosition = educationBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 3;
  if(educationBoxPosition < screenPosition) {
    educationBox.classList.add('eduAppear');
  }
}

function work1Appear() {
  var workBox = document.querySelector('.edu-details-1');
  var workBoxPosition = workBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  if(workBoxPosition < screenPosition) {
    workBox.classList.add('work1Appear');
  }
}

function work2Appear() {
  var workBox = document.querySelector('.edu-details-2');
  var workBoxPosition = workBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  if(workBoxPosition < screenPosition) {
    workBox.classList.add('work2Appear');
  }
}

function work3Appear() {
  var workBox = document.querySelector('.edu-details-3');
  var workBoxPosition = workBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  if(workBoxPosition < screenPosition) {
    workBox.classList.add('work3Appear');
  }
}

function work4Appear() {
  var workBox = document.querySelector('.edu-details-4');
  var workBoxPosition = workBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  if(workBoxPosition < screenPosition) {
    workBox.classList.add('work4Appear');
  }
}

function work5Appear() {
  var workBox = document.querySelector('.edu-details-5');
  var workBoxPosition = workBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  if(workBoxPosition < screenPosition) {
    workBox.classList.add('work5Appear');
  }
}

function wid1Appear() {
  var widBox = document.querySelector('.wid-des-1');
  var widBoxPosition = widBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  if(widBoxPosition < screenPosition) {
    widBox.classList.add('wid1Appear');
  }
}

function wid2Appear() {
  var widBox = document.querySelector('.wid-des-2');
  var widBoxPosition = widBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  if(widBoxPosition < screenPosition) {
    widBox.classList.add('wid2Appear');
  }
}

function wid3Appear() {
  var widBox = document.querySelector('.wid-des-3');
  var widBoxPosition = widBox.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  if(widBoxPosition < screenPosition) {
    widBox.classList.add('wid3Appear');
  }
}

window.addEventListener('scroll', Appear);
window.addEventListener('scroll', boxAppear);
window.addEventListener('scroll', work1Appear);
window.addEventListener('scroll', work2Appear);
window.addEventListener('scroll', work3Appear);
window.addEventListener('scroll', work4Appear);
window.addEventListener('scroll', work5Appear);
window.addEventListener('scroll', wid1Appear);
window.addEventListener('scroll', wid2Appear);
window.addEventListener('scroll', wid3Appear);