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
    document.getElementById("navbar").style.backgroundColor = "#18181b";
    document.getElementById("navbar").style.boxShadow = "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px";
    document.getElementById("logo").style.color = "#000000";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#ffffff00";
    document.getElementById("navbar").style.boxShadow = "none";
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


function chooseHobbies1() {
  football.style.color = "#ffffff";
  basketball.style.color = "#9a9a9a";
  travel.style.color = "#9a9a9a";
  coffee.style.color = "#9a9a9a";
  podcast.style.color = "#9a9a9a";
  overlayImg.src = "./assets/images/Hobbies/football-bu.jpg";
  overlayDescription.innerHTML = "I've been playing football since I was a kid. It helps me connect with many great friends and enjoy the game.";
  overlay.style.justifyContent = "start";
  overlayDescription.style.textAlign ="start";
  overlayContent.style.alignItems = "start";
}

function chooseHobbies2() {
  football.style.color = "#9a9a9a";
  basketball.style.color = "#ffffff";
  travel.style.color = "#9a9a9a";
  coffee.style.color = "#9a9a9a";
  podcast.style.color = "#9a9a9a";
  overlayImg.src = "./assets/images/Hobbies/basketball-bu.jpg";
  overlayDescription.innerHTML = "After football, basketball is also my favorite sport. This sport also gives me the opportunity to connect with so many amazing people.";
  overlay.style.justifyContent = "end";
  overlayDescription.style.textAlign ="end";
  overlayContent.style.alignItems = "end";
}

function chooseHobbies3() {
  football.style.color = "#9a9a9a";
  basketball.style.color = "#9a9a9a";
  travel.style.color = "#ffffff";
  coffee.style.color = "#9a9a9a";
  podcast.style.color = "#9a9a9a";
  overlayImg.src = "./assets/images/Hobbies/travel-bu.jpg";
  overlayDescription.innerHTML = "I have always loved exploring new lands. Travel takes us out of our comfort zones and inspires us to see, taste and try new things.";
  overlay.style.justifyContent = "start";
  overlayDescription.style.textAlign ="start";
  overlayContent.style.alignItems = "start";
}

function chooseHobbies4() {
  football.style.color = "#9a9a9a";
  basketball.style.color = "#9a9a9a";
  travel.style.color = "#9a9a9a";
  coffee.style.color = "#ffffff";
  podcast.style.color = "#9a9a9a";
  overlayImg.src = "./assets/images/Hobbies/coffee-bu.jpg";
  overlayDescription.innerHTML = "My hobby in my free time is going to quiet cafes in Hanoi that I know. The familiar seat with the signature cup of coffee there always gives me a feeling of peace and comfort.";
  overlay.style.justifyContent = "end";
  overlayDescription.style.textAlign ="end";
  overlayContent.style.alignItems = "end";
}

function chooseHobbies5() {
  football.style.color = "#9a9a9a";
  basketball.style.color = "#9a9a9a";
  travel.style.color = "#9a9a9a";
  coffee.style.color = "#9a9a9a";
  podcast.style.color = "#ffffff";
  overlayImg.src = "./assets/images/Hobbies/podcast.jpg";
  overlayDescription.innerHTML = "Instead of reading books, listening to podcasts helps me absorb knowledge more easily. There's a lot of good content on podcast platforms and I feel it makes me feel good.";
  overlay.style.justifyContent = "start";
  overlayDescription.style.textAlign ="start";
  overlayContent.style.alignItems = "start";
}



