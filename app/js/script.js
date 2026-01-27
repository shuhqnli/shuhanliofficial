const toggle = document.querySelector("#toggle");
const header = document.querySelector(".header");
const headerLogo = document.querySelector("#headerLogo");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

toggle.addEventListener("click", function(){

  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("noscroll")
    fadeElems.forEach(function(element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    header.classList.add("open");
    body.classList.add("noscroll");
    fadeElems.forEach(function(element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }

});

document.addEventListener("scroll", () => {
  const top = document.documentElement.scrollTop;
  if (top > 0) {
    header.classList.add("static");
    headerLogo.src = "/images/logo img red.png"
  } else {
    header.classList.remove("static");
    headerLogo.src = "/images/logo img white.png"
  }
})

const fadeElements = document.querySelectorAll('.fade-in-scroll');
let lastScrollY = window.scrollY;

const observer = new IntersectionObserver((entries) => {
  const scrollingUp = window.scrollY < lastScrollY;
  lastScrollY = window.scrollY;

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else if (scrollingUp) {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px 0px 0px'
});

fadeElements.forEach(element => {
  observer.observe(element);
});