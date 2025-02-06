gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      // عندما يتم التمرير أكثر من 50 بكسل
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// anime.js animation fix
let convirtSecLeftContent = document.querySelector(".convirtSecLeftConent");

if (convirtSecLeftContent) {
  for (let i = 0; i < 100; i++) {
    // تعديل العدد ليكون 100 بدلًا من 101
    let dot = document.createElement("div");
    dot.classList.add("element");
    convirtSecLeftContent.appendChild(dot);
  }

  let dotAll = document.querySelectorAll(".element");

  let animation = anime.timeline({
    targets: dotAll,
    easing: "easeInOutExpo", // تعديل التهجئة إلى easing الصحيح
    loop: true,
    delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
  });

  animation
    .add({
      rotateZ: 180,
      translateY: anime.stagger(-20, {
        grid: [10, 10],
        from: "center",
        axis: "y",
      }),
      translateX: anime.stagger(-20, {
        grid: [10, 10],
        from: "center",
        axis: "x",
      }),
      opacity: 1,
    })
    .add({
      borderRadius: ["0%", "50%"], // تحسين التحويل إلى دائرة
    })
    .add({
      scale: 0.2,
      opacity: 1,
    })
    .add({
      rotateZ: 180,
      translateY: anime.stagger(0, {
        grid: [10, 10],
        from: "center",
        axis: "y",
      }),
      translateX: anime.stagger(0, {
        grid: [10, 10],
        from: "center",
        axis: "x",
      }),
      opacity: 1,
    })
    .add({
      scale: 1,
      opacity: 0,
    });
} else {
  console.error("العنصر .convirtSecLeftConent غير موجود في الصفحة.");
}
//

// gsapp
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".communitySec",
    start: "0% 95%",
    end: "80% 60%",
    scrub: true,
    duration: 2,
  },
});
tl.to(
  "#Coin",
  {
    top: "200%",
    left: "50%",
    rotateZ: "-40deg",
  },
  "Coin"
);

tl.to(
  "#coniOne",
  {
    top: "230%",
    left: "60%",
    rotateZ: "0deg",
  },
  "Coin"
);

tl.to("#coniTwo", {
  top: "160%",
  left: "-40%",
  rotateZ: "0deg",
  width: "60%",
});

tl.to(
  "#coniThree",
  {
    top: "170%",
    left: "80%",
    rotateZ: "-40deg",
    width: "30%",
  },
  "Coin"
);
tl.to(
  "#coniFour",
  {
    top: "230%",
    left: "-4%",
    rotateZ: "30deg",
    width: "30%",
  },
  "Coin"
);
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".convirtSec",
    start: "0% 95%",
    end: "80% 60%",
    scrub: true,
  },
});
tl2.to(
  "#Coin",
  {
    top: "330%",
    left: "-60%",
    rotateZ: "40deg",
    zIndex: "-9",
    duration: 2,
  },
  "Coin"
);

// nav
gsap.from(".logoooo", {
  opacity: 0,
  delay: 0.7,
  x: -20,
});
const menuItems = document.querySelector(".navLinkes");
gsap.from(menuItems.children, {
  opacity: 0,
  delay: 0.7,
  y: -40,
  delay: 1,
  stagger: {
    amount: 1,
  },
});
gsap.utils.toArray(".HomeTitle").forEach((title) => {
  gsap.fromTo(
    title,
    {
      opacity: 0,
      x: -300,
      skewX: 65,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1.7,
      delay: 0.5,
      scrollTrigger: title,
    }
  );
});
gsap.utils.toArray(".animationnn").forEach((animationnn) => {
  gsap.fromTo(
    animationnn,
    {
      opacity: 0,
      y: 300,
      skewX: 65,
    },
    {
      opacity: 1,
      y: 0,
      skewX: 0,
      duration: 1.7,
      delay: 0.3,
      scrollTrigger: animationnn,
    }
  );
});
gsap.utils.toArray(".pragrap").forEach((pragrap) => {
  gsap.fromTo(
    pragrap,
    {
      opacity: 0,
      x: 150,
      skewX: 30,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: pragrap,
    }
  );
});
gsap.utils.toArray("button").forEach((button) => {
  gsap.fromTo(
    button,
    {
      opacity: 0,
    },
    {
      opacity: 1,

      duration: 1,
      delay: 1,
      scrollTrigger: button,
    }
  );
});

// // 
// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".communitySec",
//     start: "0% 95%",
//     end: "80% 60%",
//     scrub: true,
//     duration: 2,
//   },
// });
// tl.to(
//   "#Coin",
//   {
//     top: "200%",
//     left: "50%",
//     rotateZ: "-40deg",
//   },
//   "Coin"
// );
const tbody = document.querySelector("tbody");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.from(entry.target.children, {
          opacity: 0,
          y: -40,
          delay: 0.3,
          stagger: {
            amount: 1,
          },
        });
        observer.unobserve(entry.target); // لمنع تكرار الأنيميشن عند كل تمرير
      }
    });
  },
  { threshold: 0.2 } // تشغيل الأنيميشن عندما يكون 20% من العنصر مرئيًا
);

observer.observe(tbody);


gsap.fromTo(
  ".carddd",
  {
    opacity: 0,
    scale: 0.1,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.2,
    rotateZ: "360deg",
    stagger: {
      amount: 1,
    },
    scrollTrigger: ".carddd",
  }
);
//
const text = "Get in touch with us!";
let cartes = text.split("");
cartes.forEach((char) => {
  let h1 = document.createElement("h1");
  h1.className = "h1111";
  h1.textContent = char === " " ? "\u00A0" : char;
  document.querySelector(".h1111").appendChild(h1);
});
let tll = gsap.timeline({
  scrollTrigger: {
    trigger: ".GetintouchSec",
  },
});
tll
  .from(".h1111", {
    opacity: 0,
    y: -250,
    stagger: 0.09,
    duration: 0.5,
    ease: "back.out(1.5)",
  })
  .to(".h1111", {
    y: -10,
    x: -20,
    ease: "power1.inOut",
  });
  const footer = document.querySelector(".bd-footer");
  const footerElements = footer.querySelectorAll(".row > div, .FooterEnnddIcons"); // تحديد جميع العناصر الداخلية المهمة
  
  const observerFooter = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target, {
            opacity: 0,
            y: -40,
            duration: 1,
            stagger: 0.2, // يجعل العناصر تظهر واحدة تلو الأخرى
          });
          observerFooter.unobserve(entry.target); // لمنع إعادة تشغيل الأنيميشن
        }
      });
    },
    { threshold: 0.2 }
  );
  
  // مراقبة كل عنصر داخل الفوتر على حدة
  footerElements.forEach((el) => observerFooter.observe(el));
  let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = document.querySelector('.num3')

const CounterUpAnimation = (number , start,end ,duration)=>{
   let startTimestamp = null;
   const step = (tiemstamp)=>{
    if(!startTimestamp){
        startTimestamp = tiemstamp
    }

    let prograss = Math.min((tiemstamp - startTimestamp) / duration , 1)
    number.innerHTML = Math.floor(prograss * (end - start) + start) + '+'

    if(prograss <1){
        window.requestAnimationFrame(step)
    }
   } 
   window.requestAnimationFrame(step)
}

setTimeout(()=>{
    CounterUpAnimation(num1 , 0 , 1000 , 2000)
    CounterUpAnimation(num2 , 0 , 32 , 2000)
    CounterUpAnimation(num3 , 0 , 50 , 3000)
} , 1000)

