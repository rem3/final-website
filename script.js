const IT = document.querySelector(".IT");
const slider = document.querySelector(".slider");
const Logo = document.querySelector("Logo");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(IT, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(IT, 1.2, {width: "90%"}, {width: "90%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2");


var modalbtn = document.querySelector('.modal-btn');
var modalbg = document.querySelector('.modal-bg');
var closeBtn = document.querySelector('.closeBtn');

modalbtn.addEventListener('click', function () {
  modalbg.classList.add('bg-active');
});
closeBtn.addEventListener('click', function () {
  modalbg.classList.remove('bg-active');
});
