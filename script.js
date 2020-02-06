/*function runCode(){
    alert("hello world");
}
*/
var animData = {
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://assets3.lottiefiles.com/packages/lf20_d21fd2.json'
};
var anim = bodymovin.loadAnimation(animData);;
window.onresize = anim.resize.bind(anim);


    