gsap.registerPlugin(ScrollTrigger);

const card = document.querySelector("#card");

if (card) {
  gsap.set(card, { y: 0, rotate: -6 });

  gsap.to(card, {
    y: -140,
    rotate: 2,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    gsap.to(card, { rotateY: x, rotateX: y, duration: 0.4, ease: "power2.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
  });
}
