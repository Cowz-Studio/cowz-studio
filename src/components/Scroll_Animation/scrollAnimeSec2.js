import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Define the scroll-triggered animation
  gsap.to("body", {
    backgroundColor: "#000", // Set the background color to black
    ease: "none", // No easing for a linear transition
    scrollTrigger: {
      trigger: "#s2", // The section that triggers the background change
      start: "top center", // Start when the top of the section hits the center of the viewport
      end: "bottom center", // End when the bottom of the section hits the center of the viewport
      toggleActions: "play reverse play reverse", // Reverses the animation when scrolling back
      markers: true, //debugging
    },
  });

  // Define the reverse animation for leaving the section
  gsap.to("body", {
    backgroundColor: "#fff", // Set the background color back to white
    ease: "none", // No easing for a linear transition
    scrollTrigger: {
      trigger: "#s2", // The section that triggers the background change
      start: "bottom center", // Start reversing when the bottom of the section hits the center of the viewport
      end: "top center", // End when the top of the section leaves the viewport
      scrub: true, // Smoothly animate the color change
      toggleActions: "play reverse play reverse", // Reverses the animation when scrolling back
    },
  });
});