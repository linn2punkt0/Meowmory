const images =
  // Funktion randomImage() för att slumpa fram en bild

  // function getRandomImage(imgAr, path) {
  //     path = path || 'images/'; // default path here
  //     var num = Math.floor( Math.random() * imgAr.length );
  //     var img = imgAr[ num ];
  //     var imgStr = '<img src="' + path + img + '" alt = "">';
  //     document.write(imgStr); document.close();
  // }

  function randomImage(array, path) {
    const num = Math.floor(Math.random() * array.length);
    const img = array[num];
    const imagePath = path + img;
    return imagePath;
  };

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
