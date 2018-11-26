const images = [
  "./images/Image1.jpg",
  "./images/Image2.jpg",
  "./images/Image3.jpg",
  "./images/Image4.jpg",
  "./images/Image5.jpg",
  "./images/Image6.jpg",
  "./images/Image7.jpg",
  "./images/Image8.jpg",
  "./images/Image9.jpg",
  "./images/Image10.jpg"
];

// Funktion randomImage() för att slumpa fram en bild

function randomImage(images) {
  const cards = document.querySelectorAll(".card");
  const double = [...images, ...images];
  cards.forEach((card, i) => {
    const num = Math.floor(Math.random() * double.length);
    const img = double[num];
    card.style.backgroundImage = `url(${img})`;
    double.splice(i, 1);
  });
}

randomImage(images);

// Testa sort maath.random

// Vänd bild när man klickar på den
function flipCard() {
  this.classList.toggle("flip");
}
const cards = document.querySelectorAll(".card");
cards.forEach(cards => card.addEventListener("click", flipCard));

// Klickcounter
function countClicks() {}

// Poängcounter
function points() {}

function lookForPair() {
  // If (card1 === card2) {
  // Låt de ligga uppvända och lägg till poäng i poäng-counter
  // }
  // Else {
  // Vänd tillbaka dem
  // }
  // }
}

// Spara vända kort i en array matcha value 0 mot value 1
function finnishedPairs() {}

// När man fått 10 poäng = "You won!"

// Play again-knapp - Starta om: Kör randomImage() och nollställ poäng-countern och klick-countern
function reset() {}
