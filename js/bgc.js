document.querySelector("header div.swichColor").addEventListener('click', () => {
  document.querySelectorAll('.swich').forEach(swichAll => {
    swichAll.classList.toggle('active');
  })
});