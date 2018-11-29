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
let points = 0;
let clicks = 0;

//Shuffle the images and place them in the card divs - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const cards = document.querySelectorAll(".card");

function shuffleImages(imageArray) {
  const memoryCards = imageArray.concat(imageArray);
  memoryCards.sort(() => 0.5 - Math.random());
  cards.forEach((card, i) => {
    const cardFront = card.querySelector(".card__front");
    cardFront.style.backgroundImage = `url(${memoryCards[i]})`;
    const cardName = `url(${memoryCards[i]})`;
    card.setAttribute("data-cardname", cardName);
  });
}

// Vänd bild när man klickar på den - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let hasFlippedCard = false;
let card1, card2;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}
// const flippedCards = document.querySelectorAll(".card.flipped"); Behövs inte längre?

function flipCard() {
  this.classList.toggle("flipped");

  // Hit funkar det................................Fast "flipped" togglas inte, bara aktiveras

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    card1 = this;
    return;
  }
  card2 = this;
  hasFlippedCard = false;
  checkForMatch();
}

function checkForMatch() {
  if (card1.dataset.cardname === card2.dataset.cardname) {
    disableCards();
    points++;
    console.log(points);
    return;
  }
  unflipCards();
}

function disableCards() {
  card1.removeEventListener("click", flipCard);
  card2.removeEventListener("click", flipCard);
}

function unflipCards() {
  setTimeout(() => {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }, 500);
}

// Klickcounter
// function countClicks() {}

// Poängcounter
// function points() {}

// function lookForPair() {
// If (card1 === card2) {
// Låt de ligga uppvända och lägg till poäng i poäng-counter
// }
// Else {
// Vänd tillbaka dem
// }
// }
// }

// Spara vända kort i en array matcha value 0 mot value 1
// function finnishedPairs() {}

// När man fått 10 poäng = "You won!"
function youWon() {
  if (points === 10) {
    console.log("You won!");
  }
}

// Reset function - Lägg till: nollställ poäng-countern och klick-countern, nollställ classer
function reset() {
  shuffleImages(images);
  cards.forEach((card, i) => {
    card.classList.remove("flipped");
  });
}

//Reset game when browser reloads - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
window.onload = reset();

//Reset game when play-again-button is clicked - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const playAgainButton = document.querySelector("button");
playAgainButton.addEventListener("click", reset);
