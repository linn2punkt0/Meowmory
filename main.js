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

// Show current score - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let currentScore = document.querySelector(".points");
currentScore.innerHTML = " Points: " + points;

let currentClicks = document.querySelector(".clicks");
currentClicks.innerHTML = " Clicks: " + clicks;

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

// Flip card when clicked and count clicks - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let hasFlippedCard = false;
let card1, card2;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}
// const flippedCards = document.querySelectorAll(".card.flipped"); Behövs inte längre?

function flipCard() {
  this.classList.add("flipped");
  clicks++;
  currentClicks.innerHTML = " Clicks: " + clicks;

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    card1 = this;
    return;
  }
  card2 = this;
  hasFlippedCard = false;
  checkForMatch();
}

// Check if cards match, if so: disable them, add points and run checkScore-function to se if you've won - DONE!!!!!!!!!!!!
function checkForMatch() {
  if (card1.dataset.cardname === card2.dataset.cardname) {
    disableCards();
    points++;
    currentScore.innerHTML = " Points: " + points;
    checkScore();
    return;
  }
  // lås pointerEvents om man trycker på två kort
  flipBackCards();
}

// Disable cards that has been matched so you can't click on them again - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function disableCards() {
  card1.removeEventListener("click", flipCard);
  card2.removeEventListener("click", flipCard);
}

// Flip cards that did not match so they face down again - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function flipBackCards() {
  setTimeout(() => {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }, 1000);
}

// Checks if you have 10 point and displays winner-message
function checkScore() {
  if (points === 10) {
    console.log("You won!");
  }
}

// Time-counter

// Resets click-counter, point-counter and removes "flipped"-class - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function reset() {
  shuffleImages(images);
  point = 0;
  clicks = 0;
  currentScore.innerHTML = " Points: " + points;
  currentClicks.innerHTML = " Clicks: " + clicks;
  cards.forEach((card, i) => {
    card.classList.remove("flipped");
  });
}

// Reset game when browser reloads - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
window.onload = reset();

// Reset game when play-again-button is clicked - DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const playAgainButton = document.querySelector("button");
playAgainButton.addEventListener("click", reset);
