gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 100);
  });
});

// تحسين أداء anime.js
let convirtSecLeftContent = document.querySelector(".convirtSecLeftConent");
if (convirtSecLeftContent) {
  for (let i = 0; i < 100; i++) {
    let dot = document.createElement("div");
    dot.classList.add("element");
    convirtSecLeftContent.appendChild(dot);
  }

  anime.timeline({
    targets: ".element",
    easing: "easeInOutExpo",
    loop: true,
    delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
  })
    .add({
      rotateZ: 180,
      translateY: anime.stagger(-20, { grid: [10, 10], from: "center", axis: "y" }),
      translateX: anime.stagger(-20, { grid: [10, 10], from: "center", axis: "x" }),
      opacity: 1,
    })
    .add({ borderRadius: ["0%", "50%"] })
    .add({ scale: 0.2, opacity: 1 })
    .add({ opacity: 0, scale: 1 });
}

// تحسين أداء GSAP على الديسكتوب فقط
if (window.innerWidth >= 1024) {
  gsap.utils.toArray(".HomeTitle, .animationnn, .pragrap, button").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: el,
    });
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".communitySec",
      start: "0% 95%",
      end: "80% 60%",
      scrub: 1,
    },
  })
    .to("#Coin", { top: "200%", left: "50%", rotateZ: "-40deg" }, "Coin")
    .to("#coniOne", { top: "230%", left: "60%" }, "Coin")
    .to("#coniTwo", { top: "160%", left: "-40%", width: "60%" })
    .to("#coniThree", { top: "170%", left: "80%", width: "30%" }, "Coin");
}

// تحسين العداد
const CounterUpAnimation = (number, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    let progress = Math.min((timestamp - startTimestamp) / duration, 1);
    number.innerHTML = Math.floor(progress * (end - start) + start) + "+";
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
};

setTimeout(() => {
  CounterUpAnimation(document.querySelector(".num1"), 0, 100, 2000);
  CounterUpAnimation(document.querySelector(".num2"), 0, 32, 2000);
  CounterUpAnimation(document.querySelector(".num3"), 0, 50, 3000);
}, 1000);
