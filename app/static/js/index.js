const typewriter = new Typewriter("#typewriter", {
  loop: true,
});

typewriter
  .changeDelay(50)
  .typeString("Is this a photo album?")
  .pauseFor(1000)
  .deleteAll(15)
  .typeString("Is this a instagram clone?")
  .pauseFor(1000)
  .deleteAll(15)
  .typeString("No seriously... Where am I?")
  .pauseFor(1000)
  .start();

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const menu_icon = document.querySelector(".menu-icon");
  const close_icon = document.querySelector(".close-icon");

  burger.addEventListener("click", () => {
    nav.classList.toggle("hidden-links");
    menu_icon.classList.toggle("hidden-svg");
    close_icon.classList.toggle("hidden-svg");
  });
};

navSlide();
