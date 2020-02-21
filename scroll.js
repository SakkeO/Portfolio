var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0";
    document.getElementById("scroll").style.top = "17px";
  } else {
    document.getElementById("myTopnav").style.top = "-px";
    document.getElementById("scroll").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}

