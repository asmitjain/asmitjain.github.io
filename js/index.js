window.onscroll = function() {
  toggleStickyTopBar()
};
// window.onload = setInterval(function(){ changeTagText() }, 3000);
window.onload = function() {
  writeText()
};

var i = 0;
var j = 0;
var speed = 10;

var textArray = ['CREATIVE TECHNOLOGIST', 'GAME DESIGNER', 'UI/UX DESIGNER', 'PRODUCT DESIGNER'];

function writeText() {

  var app = document.getElementById('personal-tag');
  var typewriter = new Typewriter(app, {
    loop: true
  });

  typewriter.typeString('MECHANICAL DESIGNING')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('PROTOTYPING')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('LEAN MANUFACTURING')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('ADDITIVE MANUFACTURING/ 3D PRINTING')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('QUALITY CONTROL')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('NEW PRODUCT/ PROCESS DEVELOPMENT')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('PLC & HMI/SCADA')
    .pauseFor(3000)
    .deleteAll(5)
    .start();
}

function toggleStickyTopBar() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById('sticky-header').classList.add('top-navigation-shadow');
    document.getElementById('sticky-header').classList.add('top-background-white');
  } else {
    document.getElementById('sticky-header').classList.remove('top-navigation-shadow');
    document.getElementById('sticky-header').classList.add('top-background-grey');
  }
}


function changeTagText() {

  var personalTags = document.querySelector('#personal-tag');

  // typeWriter();
  personalTags.innerText = textArray[i];

  personalTags.classList.add('underline--magical');

  if (i < 3) {
    i = i + 1;
  } else if (i == 3) {
    i = 0;
  }
}

$(document).ready(function() {
  var color = 'one';
  var counter = 0;
  $('.desc').hide();
  $('.hexagon').hover(
    function() {
      $(this).find('.desc').fadeIn('fast');
      counter++;
      if (counter === 0) {
        color = 'base';
      } else if (counter === 1) {
        color = 'one';
      } else if (counter === 2) {
        color = 'two';
      } else if (counter === 3) {
        color = 'three';
      } else if (counter >= 4){
        counter = 0 ;
        color = 'base';
      }
      $(this).find('.desc').addClass(color);
    }, 
    function() {
      $(this).find('.desc').fadeOut('fast', function() {
        $(this).removeClass(color);
      });
    });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
