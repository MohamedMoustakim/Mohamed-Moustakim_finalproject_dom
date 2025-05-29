let BuModal = document.querySelector("#btn-1log")
let modal = document.querySelector(".wrapper")
let closeModal = document.querySelector("#fxmark")

BuModal.addEventListener('click', () => {
    modal.style.display = "flex"
})
closeModal.addEventListener('click',() => {
    modal.style.display = "none"
})



let Video = document.querySelector("#video");
let mydivmodal = document.querySelector("#vimodal");
// let divPlayVideo = document.querySelector("#play-video")
let evid = document.querySelector(".video-close");

Video.addEventListener("click", () => {
  mydivmodal.style.display = "block";
});

evid.addEventListener("click", () => {
  mydivmodal.style.display = "none";
});

// divPlayVideo.addEventListener("click", () => {
//   mydivmodal.style.display = "block";
// });