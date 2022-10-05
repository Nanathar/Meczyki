let activeElement = 0;
const timeChange = 10000;

// Pobieramy 4 elementy na których pracujemy
const img1 = document.querySelector('img.img1');
const img2 = document.querySelector('img.img2');
const img3 = document.querySelector('img.img3');
const img4 = document.querySelector('img.img4');

//Informacje w tablicach o elementach podmienianych
const firstDiv = ['img/banner1.png', 'img/banner1a.png'];
const secondDiv = ['img/banner2.png', 'img/banner2a.png'];
const thirdDiv = ['img/banner3.png', 'img/banner3a.png'];
const fourthDiv = ['img/banner4.png', 'img/banner4a.png'];

function changeElement() {
 activeElement++;
 if (activeElement == firstDiv.length) {
  activeElement = 0;
 }
 img1.src = firstDiv[activeElement];
 img2.src = secondDiv[activeElement];
 img3.src = thirdDiv[activeElement];
 img4.src = fourthDiv[activeElement];
}

setInterval(changeElement, timeChange)