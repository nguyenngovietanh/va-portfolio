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

$.validator.addMethod("email", function(value, element) {
  return this.optional(element) || /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(value);
}, 'Địa chỉ email chưa hợp lệ');

$(() => {
  $('#form').submit(e => {
      let fullName = $('#fullname').val().trim();
      let email = $('#email').val().trim();
      let message = $('#message').val().trim();
      let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (fullName.length === 0) {
        showError('Vui lòng nhập password');
        e.preventDefault();
      }

      else if (email.length === 0) {
          showError('Vui lòng nhập email');
          e.preventDefault();
      }

      else if (!regex.test(email)) {
          showError('Email không hợp lệ');
          e.preventDefault();
      }

      else if (regex.test(email) && fullName.length > 0 && email.length > 0) {
          console.log(fullName);
          console.log(email); 
          swal({
              title: "Chúc mừng",
              text: "Bạn đã đăng nhập thành công!",
              icon: "success",
              }).then(ok => {
                  if(ok) {
                      window.location.href = "./list_student.php";
                  }
              })
          e.preventDefault();
      }
  })
})

function showError(message) {
  $('#errorMessage').html(message);
  $('#errorMessage').show();
}




