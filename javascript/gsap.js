gsap.registerPlugin(SplitText) 

// Navbar
const menu = document.querySelector(".menu");
const closes = document.querySelector(".close");

const navTimeLine = gsap.timeline({ paused: true, reversed: true });

// mobile-nav slide in
navTimeLine.to(".mobile-nav", {
  right: "0%",
  duration: 0.8,
});

// li items stagger
navTimeLine.from(
  ".mobile-nav li",
  {
    x: 150,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  },
  "-=0.4"
);

// Open Menu
menu.addEventListener("click", () => {
  navTimeLine.play();
  menu.style.display = "none"; // menu icon hide
  closes.style.display = "block"; // close icon show
});

// Close Menu
closes.addEventListener("click", () => {
  navTimeLine.reverse();
  menu.style.display = "block"; // menu icon show
  closes.style.display = "none"; // close icon hide
});

const headerTimeLine = gsap.timeline();

gsap.from(".logo", {
  y: -30,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  ease: "power1.in.out",
});

headerTimeLine.from(".nav-links li", {
  opacity: 0,
  y: -40,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.3,
  ease: "power1.in.out",
});

gsap.from(".nav-container span", {
  y: -50,
  opacity: 0,
  duration: 0.8,
  delay: 1.2,
  ease: "power1.in.out",
});

// // Main Title

// Split text into letters and animate
function splitAndAnimate(element, animationOptions) {
  const text = element.textContent;
  const letters = text.split("");
  element.innerHTML = letters
    .map((letter) => (letter === " " ? " " : `<span>${letter}</span>`))
    .join("");

  gsap.from(element.querySelectorAll("span"), animationOptions);
}

// Animate all lines
document.querySelectorAll(".hero-title .line").forEach((line, index) => {
  splitAndAnimate(line, {
    opacity: 0,
    y: 100,
    duration: 0.4,
    delay: 1 + index * 0.099, // har line ke liye thoda delay
    stagger: 0.08 * (index % 2 === 0 ? 1 : -1), // odd-even lines me ulta stagger
    force3D: true,
  });
});

gsap.from(".right-thumbnails", {
  opacity: 0,
  x: 323,
  duration: 1.5,
  delay: 1.8,
  stagger: 0.2,
});

gsap.from(".thumbnail>img", {
  opacity: 0,
  y: 62,
  duration: 0.5,
  delay: 2.5,
  stagger: 0.4,
});

gsap.from(".left-sidebar", {
  opacity: 0,
  x: -223,
  duration: 1,
  delay: 2,
  stagger: 0.2,
});

gsap.from(".sidebar-icon>i", {
  opacity: 0,
  y: 62,
  duration: 1,
  delay: 1.5,
  stagger: 1,
});

gsap.from(".background-person", {
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
});

//   Cursor
const root = document.querySelector(".root");
const slideImg = document.querySelectorAll(
  ".thumbnail, .nav-links>li>a, .sidebar-icon, .start-btn"
);
const cursor = document.createElement("div");
const addClass = (cursor.className = "cursor");
root.appendChild(cursor);
cursor.style.width = "80px";
cursor.style.height = "80px";
cursor.style.borderRadius = "50%";
cursor.style.backgroundColor = "var(--light-purple)";
cursor.style.backgroundColor = "var(--light-purple)";
cursor.style.position = "fixed";
cursor.style.zIndex = "1001";
cursor.style.top = "0";
cursor.style.pointerEvents = "none";

root.addEventListener("mousemove", (val) => {
  gsap.to(cursor, {
    x: val.x,
    y: val.y,
    duration: 0.4,
    ease: "power1.out",
  });
});
// Correct way to add listeners to multiple elements
slideImg.forEach((thumbnail) => {
  thumbnail.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      opacity: 0.4,
      scale: 1.5, // Added for a better effect
      duration: 0.3,
    });
  });

  thumbnail.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1, // Return to normal scale
      duration: 0.3,
    });
  });
});
