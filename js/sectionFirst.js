// Przyciski na których pracujemy
const btnMeczeShow = document.querySelector(".game div.btn button:nth-child(1)");
const btnMeczeOff = document.querySelector(".game div.btnSecond button:nth-child(1)");
const btnTypeShow = document.querySelector(".type div.btn button:nth-child(1)");
const btnTypeOff = document.querySelector(".type div.btnSecond button:nth-child(1)");
const btnSbuzzShow = document.querySelector(".sportbuzz div.btn button:nth-child(1)");
const btnSbuzzOff = document.querySelector(".sportbuzz div.btnSecond button:nth-child(1)");

//Game pobranie
let divGame = document.querySelector('.game');
let gameDivNone = document.querySelectorAll('.game div.none');
let btnGameFirst = document.querySelector('.game div.btn');
let btnGameSecond = document.querySelector('.game div.btnSecond');
//Typy pobranie
let divType = document.querySelector('.type');
let typeDivNone = document.querySelectorAll('.type div.none');
let btnTypeFirst = document.querySelector('.type div.btn');
let btnTypeSecond = document.querySelector('.type div.btnSecond');
//Sbuzz pobranie
let divSbuzz = document.querySelector('.sportbuzz');
let sbuzzDivNone = document.querySelectorAll('.sportbuzz div.none');
let btnSbuzzFirst = document.querySelector('.sportbuzz div.btn');
let btnSbuzzSecond = document.querySelector('.sportbuzz div.btnSecond');

// Mecze
btnMeczeShow.addEventListener('click', () => {
  divGame.classList.add('game-active');
  gameDivNone.forEach(divNone => {
    divNone.classList.add('none-active')
  });
  btnGameFirst.classList.add('btn-none');
  btnGameSecond.classList.add('btnSecond-Active');
  // Schowanie Type
  divType.classList.remove('type-active');
  typeDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnTypeFirst.classList.remove('btn-none');
  btnTypeSecond.classList.remove('btnSecond-Active');
  // Schowanie Sportbuzz
  divSbuzz.classList.remove('sportbuzz-active');
  sbuzzDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnSbuzzFirst.classList.remove('btn-none');
  btnSbuzzSecond.classList.remove('btnSecond-Active');

});
btnMeczeOff.addEventListener('click', () => {
  divGame.classList.remove('game-active');
  gameDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnGameFirst.classList.remove('btn-none');
  btnGameSecond.classList.remove('btnSecond-Active');
});

// Typy
btnTypeShow.addEventListener('click', () => {
  divType.classList.add('type-active');
  document.querySelectorAll('.type div.none').forEach(divNone => {
    divNone.classList.add('none-active')
  });
  btnTypeFirst.classList.add('btn-none');
  btnTypeSecond.classList.add('btnSecond-Active');

  // Schowanie Mecze
  divGame.classList.remove('game-active');
  gameDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnGameFirst.classList.remove('btn-none');
  btnGameSecond.classList.remove('btnSecond-Active');

  // Schowanie Sportbuzz
  divSbuzz.classList.remove('sportbuzz-active');
  sbuzzDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnSbuzzFirst.classList.remove('btn-none');
  btnSbuzzSecond.classList.remove('btnSecond-Active');
});

btnTypeOff.addEventListener('click', () => {
  divType.classList.remove('type-active');
  document.querySelectorAll('.type div.none').forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnTypeFirst.classList.remove('btn-none');
  btnTypeSecond.classList.remove('btnSecond-Active');
});

// Sportbuzz
btnSbuzzShow.addEventListener('click', () => {
  divSbuzz.classList.add('sportbuzz-active');
  document.querySelectorAll('.sportbuzz div.none').forEach(divNone => {
    divNone.classList.add('none-active')
  });
  btnSbuzzFirst.classList.add('btn-none');
  btnSbuzzSecond.classList.add('btnSecond-Active');

  // Schowanie mecze
  divGame.classList.remove('game-active');
  gameDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnGameFirst.classList.remove('btn-none');
  btnGameSecond.classList.remove('btnSecond-Active');

  // Schowanie Typy
  divType.classList.remove('type-active');
  typeDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnTypeFirst.classList.remove('btn-none');
  btnTypeSecond.classList.remove('btnSecond-Active');
});

btnSbuzzOff.addEventListener('click', () => {
  divSbuzz.classList.remove('sportbuzz-active');
  sbuzzDivNone.forEach(divNone => {
    divNone.classList.remove('none-active')
  });
  btnSbuzzFirst.classList.remove('btn-none');
  btnSbuzzSecond.classList.remove('btnSecond-Active');
});

document.querySelectorAll('.off').forEach(offs => {
  offs.addEventListener('click', () => {
    divGame.classList.remove('game-active');
    gameDivNone.forEach(divNone => {
      divNone.classList.remove('none-active')
    });
    btnGameFirst.classList.remove('btn-none');
    btnGameSecond.classList.remove('btnSecond-Active');

    divType.classList.remove('type-active');
    typeDivNone.forEach(divNone => {
      divNone.classList.remove('none-active')
    });
    btnTypeFirst.classList.remove('btn-none');
    btnTypeSecond.classList.remove('btnSecond-Active');

    divSbuzz.classList.remove('sportbuzz-active');
    sbuzzDivNone.forEach(divNone => {
      divNone.classList.remove('none-active')
    });
    btnSbuzzFirst.classList.remove('btn-none');
    btnSbuzzSecond.classList.remove('btnSecond-Active');
    console.log('click')
  })
});