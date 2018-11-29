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
  this.classList.add("flipped");
  // "flipped" togglas inte, bara aktiveras

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
    checkScore();
    return;
  }
  // lås pointerEvents om man trycker på två kort
  flipBackCards();
}

function disableCards() {
  card1.removeEventListener("click", flipCard);
  card2.removeEventListener("click", flipCard);
}

function flipBackCards() {
  setTimeout(() => {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }, 1000);
}

// Klickcounter
function countClicks() {
  let clickableCards = document.querySelectorAll(".card");
  let yourScore = document.querySelector(".points");
  clickableCards.onclick = function() {
    clicks++;
    yourScore.innerHTML = "Your point: " + clicks;
    console.log(clicks);
  };
}

// När man fått 10 poäng = "You won!" - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function checkScore() {
  if (points === 10) {
    console.log("You won!");
  }
}

// Reset function - Lägg till: nollställ poäng-countern och klick-countern, nollställ classer
function reset() {
  shuffleImages(images);
  let point = 0;
  let clicks = 0;
  cards.forEach((card, i) => {
    card.classList.remove("flipped");
  });
}

//Reset game when browser reloads - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
window.onload = reset();

//Reset game when play-again-button is clicked - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const playAgainButton = document.querySelector("button");
playAgainButton.addEventListener("click", reset);
