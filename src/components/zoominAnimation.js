import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: '2%',
      end: '+=130%',
      //markers: true,
      scrub: true,
      toggleActions: "play reset reverse reverse",
    },
  });

  tl.to("#hero h2", {
    scale: 500,
    duration: 0.8,
  });

  tl.to("#hero h2", {
    opacity: 0,
    duration: 0.5,
  });
});