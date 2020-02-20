var animData = {
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://assets3.lottiefiles.com/packages/lf20_d21fd2.json'
};
var anim = bodymovin.loadAnimation(animData);
window.onresize = anim.resize.bind(anim);

var animDataHand = {
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_kTFzCV.json'
};

var anim = bodymovin.loadAnimation(animDataHand);
window.onresize = anim.resize.bind(bm);

var animTravel = {
  container: document.getElementById('travel'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets5.lottiefiles.com/packages/lf20_nu9SOF.json'
};

var anim = bodymovin.loadAnimation(animTravel);
window.onresize = anim.resize.bind(travel);

var animCamera = {
  container: document.getElementById('camera'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets4.lottiefiles.com/packages/lf20_st8V7Z.json'
};

var anim = bodymovin.loadAnimation(animCamera);
window.onresize = anim.resize.bind(camera);

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("myTopnav").style.top = "0";
//     document.getElementById("scroll").style.top = "17px";
//   } else {
//     document.getElementById("myTopnav").style.top = "-150px";
//     document.getElementById("scroll").style.top = "-100%";
//   }
//   prevScrollpos = currentScrollPos;
// }

    