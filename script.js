// En este ejercicio tenéis que sustituir TODAS las funciones tradicionales por funciones flecha y que siga funcionando igual.

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

changeBackgroundButton.addEventListener("click", function() {
  this.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const letters = getLetters();
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getLetters(){
  return '0123456789ABCDEF';
}
