// Image array
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

// Starting values
let points = 0;
let clicks = 0;
let seconds = 0;
let startTime = null;

// Display current score
let currentScore = document.querySelector(".points");
currentScore.innerHTML = " Points: " + points;

// Display number of clicks
let currentClicks = document.querySelector(".clicks");
currentClicks.innerHTML = " Clicks: " + clicks;

// Display current timer-value
let currentTime = document.querySelector(".time");
currentTime.innerHTML = "Time: " + seconds + " seconds";

//Shuffle the images and place them in the card divs
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

// Flip card when clicked, start timer and count clicks
let hasFlippedCard = false;
let card1, card2;
let hasTwoCards = false;
let interval = null;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}

function flipCard() {
  if (!hasTwoCards) {
    if (!startTime) {
      startTime = Date.now();
      interval = setInterval(timer, 1000);
    }
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
    hasTwoCards = true;
    checkForMatch();
  }
}

// Check if cards match, if so: disable them, add points and run checkScore-function to see if you've won
// If cards do not match: flip them back
function checkForMatch() {
  if (card1.dataset.cardname === card2.dataset.cardname) {
    disableCards();
    points++;
    currentScore.innerHTML = "Points: " + points;
    checkScore();
    hasTwoCards = false;
    return;
  }
  flipBackCards();
  setTimeout(() => {
    hasTwoCards = false;
  }, 1000);
}

// Disable cards that has been matched so you can't click on them again
function disableCards() {
  card1.removeEventListener("click", flipCard);
  card2.removeEventListener("click", flipCard);
}

// Flip cards that did not match so they face down again
function flipBackCards() {
  setTimeout(() => {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }, 1000);
}

// Checks if you have 10 point and displays winner-message
function checkScore() {
  if (points === 10) {
    clearInterval(interval);
    console.log("You won!");
  }
}

//Timer-function
function timer() {
  const time = Date.now() - startTime;
  currentTime.innerHTML = "Time: " + Math.round(time / 1000) + " seconds";
}

// Shuffles cards, resets click-counter, point-counter, timer and removes "flipped"-class. Also adds eventListener again.
function reset() {
  shuffleImages(images);
  clearInterval(interval);
  points = 0;
  clicks = 0;
  startTime = null;
  currentScore.innerHTML = " Points: " + points;
  currentClicks.innerHTML = " Clicks: " + clicks;
  currentTime.innerHTML = "Time: " + seconds + " seconds";
  cards.forEach((card, i) => {
    card.classList.remove("flipped");
    cards[i].addEventListener("click", flipCard);
  });
}

// Reset game when browser reload
window.onload = reset();

// Reset game when play-again-button is clicked
const playAgainButton = document.querySelector("button");
playAgainButton.addEventListener("click", reset);
