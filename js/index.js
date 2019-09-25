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

  typewriter.typeString('A UI/UX DESIGNER')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('A CREATIVE TECHNOLOGIST')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('A PROTOTYPER')
    .pauseFor(3000)
    .deleteAll(5)
    .typeString('A PRODUCT DESIGNER')
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
