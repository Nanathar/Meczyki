let activeElement2 = 0;
const timeChange2 = 10000;

// Pobieramy 4 elementy na których pracujemy
const imgPromo = document.querySelector('img.promo-buk');
const h3 = document.querySelector('h3.promo-buk');


//Informacje w tablicach o elementach podmienianych
const imgPromoChange = ['/img/bukOferta1.jpg', '/img/bukOferta1a.jpg'];
const h3Change = ['Rekordowy cashback na polskim rynku w SuperBukmacher! Sprawdz najwyższą ofertę z kodem MECZYKI', 'Szybki zarobek u naszego sprawdzonego bukmachera z kodem MECZYKI bonus do 200zł'];

function changePromotion() {
  activeElement2++;
  if (activeElement2 == imgPromoChange.length) {
    activeElement2 = 0;
  }
  imgPromo.src = imgPromoChange[activeElement2];
  h3.textContent = h3Change[activeElement2];
}

setInterval(changePromotion, timeChange2)