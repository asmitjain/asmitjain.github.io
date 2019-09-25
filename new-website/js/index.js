window.onscroll = function() {toggleStickyTopBar()};

function toggleStickyTopBar() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById('sticky-header').classList.add('top-navigation-shadow');
  } else {
    document.getElementById('sticky-header').classList.remove('top-navigation-shadow');
  }
}
