const images = ["./images/Image1.jpg", "./images/Image2.jpg"];

// Funktion randomImage() för att slumpa fram en bild

// function getRandomImage(imgAr, path) {
//     path = path || 'images/'; // default path here
//     var num = Math.floor( Math.random() * imgAr.length );
//     var img = imgAr[ num ];
//     var imgStr = '<img src="' + path + img + '" alt = "">';
//     document.write(imgStr); document.close();
// }

function randomImage(images) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const num = Math.floor(Math.random() * images.length);
    const img = images[num];
    card.style.backgroundImage = `url(${img})`;
  });
}

randomImage(images);

// Vänd bild när man klickar på den

// Klickcounter

// Poängcounter

// När du vänt på 2 bilder {
// Om bilderna matchar {
// Låt de ligga uppvända och lägg till poäng i poäng-counter
// }
// Om bilderna inte matchar {
// Vänd tillbaka dem
// }
// }

// När man fått 10 poäng = "You won!"

// Play again-knapp - Starta om: Kör randomImage() och nollställ poäng-countern och klick-countern
