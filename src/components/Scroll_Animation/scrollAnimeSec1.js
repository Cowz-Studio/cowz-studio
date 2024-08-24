import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: '2%',
      end: '+=130%',
      markers: true,
      scrub: true,
      toggleActions: "play reset play reset",
      onLeave: () => {
        // Reset the zoom when the scroll passes the end point
        gsap.to("#hero h2", { scale: 1, opacity: 0, duration: 0.5 });
      },
    },
  });

  tl.to("#hero h2", {
    scale: 500,
    pointerEvents: "none", 
    duration: 0.8,
  });

  tl.to("#hero h2", {
    opacity: 0,
    duration: 0.5,
  });
});