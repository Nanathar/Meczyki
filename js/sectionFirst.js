// Przyciski na których pracujemy
const btnMeczeShow = document.querySelector(".game div.btn button:nth-child(1)");
const btnMeczeOff = document.querySelector(".game div.btnSecond button:nth-child(1)");
const btnTypeShow = document.querySelector(".type div.btn button:nth-child(1)");
const btnTypeOff = document.querySelector(".type div.btnSecond button:nth-child(1)");
const btnSbuzzShow = document.querySelector(".sportbuzz div.btn button:nth-child(1)");
const btnSbuzzOff = document.querySelector(".sportbuzz div.btnSecond button:nth-child(1)");

//Game pobranie
const divGame = document.querySelector('.game');
const gameDivNone = document.querySelectorAll('.game div.none');
const btnGameFirst = document.querySelector('.game div.btn');
const btnGameSecond = document.querySelector('.game div.btnSecond');
//Typy pobranie
const divType = document.querySelector('.type');
const typeDivNone = document.querySelectorAll('.type div.none');
const btnTypeFirst = document.querySelector('.type div.btn');
const btnTypeSecond = document.querySelector('.type div.btnSecond');
//Sbuzz pobranie
const divSbuzz = document.querySelector('.sportbuzz');
const sbuzzDivNone = document.querySelectorAll('.sportbuzz div.none');
const btnSbuzzFirst = document.querySelector('.sportbuzz div.btn');
const btnSbuzzSecond = document.querySelector('.sportbuzz div.btnSecond');

const addGame = () => {
  divGame.classList.add('game-active');
  gameDivNone.forEach(divNone => {
    divNone.classList.add('none-active')
  });
  btnGameFirst.classList.add('btn-none');
  btnGameSecond.classList.add('btnSecond-Active');
}
const addType = () => {
  divType.classList.add('type-active');
  document.querySelectorAll('.type div.none').forEach(divNone => {
    divNone.classList.add('none-active')
  });
  btnTypeFirst.classList.add('btn-none');
  btnTypeSecond.classList.add('btnSecond-Active');
}
const addSbuzz = () => {
  divSbuzz.classList.add('sportbuzz-active');
  document.querySelectorAll('.sportbuzz div.none').forEach(divNone => {
    divNone.classList.add('none-active')
  });
  btnSbuzzFirst.classList.add('btn-none');
  btnSbuzzSecond.classList.add('btnSecond-Active');
}
const closeGame = () => {
  divGame.classList.remove('game-active');
  gameDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnGameFirst.classList.remove('btn-none');
  btnGameSecond.classList.remove('btnSecond-Active');
}
const closeType = () => {
  divType.classList.remove('type-active');
  typeDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnTypeFirst.classList.remove('btn-none');
  btnTypeSecond.classList.remove('btnSecond-Active');
}
const closeSbuzz = () => {
  divSbuzz.classList.remove('sportbuzz-active');
  sbuzzDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnSbuzzFirst.classList.remove('btn-none');
  btnSbuzzSecond.classList.remove('btnSecond-Active');
}

// Mecze
btnMeczeShow.addEventListener('click', () => {
  addGame();
  closeType();
  closeSbuzz();
});
btnMeczeOff.addEventListener('click', () => {
  closeGame();
});

// Typy
btnTypeShow.addEventListener('click', () => {
  addType();
  closeGame();
  closeSbuzz();
});
btnTypeOff.addEventListener('click', () => {
  closeType();
});

// Sportbuzz
btnSbuzzShow.addEventListener('click', () => {
  addSbuzz();
  closeGame();
  closeType();
});
btnSbuzzOff.addEventListener('click', () => {
  closeSbuzz();
});

document.querySelectorAll('.off').forEach(offs => {
  offs.addEventListener('click', () => {
    closeGame();
    closeType();
    closeSbuzz();
  })
});