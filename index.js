// import { animate, stagger } from "motion"
//  import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm"

//  animate(".example li", { opacity: 1, y: [50, 0] }, { delay: stagger(0.05) })
// animate(
//   "li",
//   { y: 0, opacity: 1 },
//   { delay: stagger(0.1) }
// )



  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");


    hamburger.addEventListener("click", function () {
     
      navMenu.classList.toggle("show");
    });

    // Close menu on link click
    document.querySelectorAll(".nav-items a").forEach(link => {
      link.addEventListener("click", () => {
       
        navMenu.classList.remove("show");
      });
    });
  });

