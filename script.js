const images = [
  "https://raw.githubusercontent.com/bmike34/bmike34.github.io/main/images/kep1.jpg",
  "https://raw.githubusercontent.com/bmike34/bmike34.github.io/main/images/kep2.jpg",
  "https://raw.githubusercontent.com/bmike34/bmike34.github.io/main/images/kep3.jpg"
];

const randomIndex = Math.floor(Math.random() * images.length);
const img = document.getElementById("randomImage");
img.src = images[randomIndex];
