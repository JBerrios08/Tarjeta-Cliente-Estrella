gsap.registerPlugin(ScrollTrigger);

const card = document.querySelector("#card");

if (card) {
  gsap.set(card, { xPercent: -50, yPercent: -50 });

  gsap.to(card, {
    y: -160,
    rotate: -6,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}
