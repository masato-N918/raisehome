// -----------------hamburger menu
const hamburgerButton = document.querySelector(".hamburger__button");
const headerNav = document.querySelector(".header-nav");

hamburgerButton.addEventListener("click", () => {
  headerNav.classList.toggle("is-active");
  hamburgerButton.classList.toggle("is-active");
});
// -----------------/hamburger menu

// -----------------modal
const workModal = document.querySelectorAll(".work-image__modal");

const workModalOpen = document.querySelectorAll(".work-image__button");

workModalOpen.forEach((modal, index) => {
  modal.addEventListener("click", () => {
    document.getElementById("image" + (index + 1)).showModal();
  });
});

workModal.forEach((modal) => {
  modal.addEventListener("click", () => {
    modal.close();
  });
});
// -----------------/modal

// -----------------fadeIn
// const options = {
//   root: null,
//   rootMargin: "-50% 0px",
//   threshold: 0,
// };

// const observer = new IntersectionObserver(fadeIn, options);

// document.querySelectorAll(".box").forEach((box) => {
//   observer.observe(box);
// });

// function fadeIn(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("fadeIn");
//     }
//   });
// }

// gsap.utils.toArray(".box").forEach((box) => {
//   gsap.from(box, {
//     x: 128,
//     opacity: 0,
//     duration: 1.5,
//     ease: "back.out",
//     scrollTrigger: {
//       trigger: box,
//       start: "top 90%",
//       end: "bottom 10%",
//       toggleActions: "play none none reverse",
//     },
//   });
// });
// -----------------/fadeIn

// -----------------swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
  },
});
// -----------------/swiper

// -----------------parallax
gsap.to(".section--parallax", {
  backgroundPosition: "50% 90%",
  ease: "none",
  scrollTrigger: {
    trigger: ".section--parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
// -----------------/parallax
