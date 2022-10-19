const body = document.body;
let lastScroll = 0;
const div = document.querySelector('div.menu-hamburger');


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (div.className === 'menu-hamburger') {
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
    }
    lastScroll = currentScroll;
  }
});