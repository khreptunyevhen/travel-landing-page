const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header
ScrollReveal().reveal(".header__container h1", scrollRevealOptions);
ScrollReveal().reveal(".header__container h4", {
  scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header__container .btn", {
  scrollRevealOptions,
  delay: 1000,
});

// about container
ScrollReveal().reveal(
  ".about__container .section__header",
  scrollRevealOptions
);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOptions,
  delay: 1500,
});

// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOptions,
  interval: 500,
  delay: 200,
});

// blogs container
ScrollReveal().reveal(".blogs__card", {
  duration: 1000,
  interval: 400,
});

// journals container
ScrollReveal().reveal(".journals__card", {
  ...scrollRevealOptions,
  interval: 400,
});
