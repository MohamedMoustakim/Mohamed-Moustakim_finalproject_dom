//* sign up
let BuModal = document.querySelector("#btn-1log")
let modal = document.querySelector(".wrapper")
let closeModal = document.querySelector("#fxmark")

BuModal.addEventListener('click', () => {
    modal.style.display = "flex"
})
closeModal.addEventListener('click',() => {
    modal.style.display = "none"
})


//* modal video
let Video = document.querySelector("#video");
let mydivmodal = document.querySelector("#vimodal");

let evid = document.querySelector(".video-close");

Video.addEventListener("click", () => {
  mydivmodal.style.display = "block";
});

evid.addEventListener("click", () => {
  mydivmodal.style.display = "none";
});


//* Menu
let Mystar = document.querySelector("#StarTers")
let Mybreak = document.querySelector("#Breakfast")
let Mylunch = document.querySelector("#Lunch")
let Mydinner = document.querySelector("#Dinner")
let Mysec4Title = document.querySelector(".redverybigfont2")

function changeTitle(text) {
  Mysec4Title.textContent = text;
  Mysec4Title.style.borderBottom = "2px solid #ce121"
}

Mystar.addEventListener('click', () => changeTitle("STARTERS"))
Mybreak.addEventListener('click', () => changeTitle("BREKFAST"))
Mylunch.addEventListener('click', () => changeTitle("LUNCH"))
Mydinner.addEventListener('click', () => changeTitle("DINNER"))


//* caroseul1 
document.addEventListener('DOMContentLoaded', ()=> {
  let carousel = document.querySelector('.carousel');
  let slides = document.querySelectorAll('.slide');
  let totalSlides = slides.length;
  let index = 0;
let indicatorsGrp = document.querySelector('.indicators-grp');

let indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}
  function goToSlide(n) {
    if (n >= totalSlides) {
      index = 0;
    } else if (n < 0) {
      index = totalSlides - 1;
    } else {
      index = n;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;

updateIndicators();
  }
  function nextSlide() {
    goToSlide(index + 1);
  }
  setInterval(nextSlide, 3000);
updateIndicators();

});