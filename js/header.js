const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.add("scroll-down");
  } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});