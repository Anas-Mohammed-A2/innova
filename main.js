document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      let navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) { // عندما يتم التمرير أكثر من 50 بكسل
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });