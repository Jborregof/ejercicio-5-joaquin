// En este ejercicio tenéis que sustituir TODAS las funciones tradicionales por funciones flecha y que siga funcionando igual.

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

//funcion flecha getLetters que retorna el string de numeros y letras
const getLetters = () => "0123456789ABCDEF";

//funcion flecha de getRandomColor que devuelve color
const getRandomColor = () => {
  const letters = getLetters();
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//Añadir el evento con funcion flecha
changeBackgroundButton.addEventListener(
  "click",
  () => (changeBackgroundButton.style.backgroundColor = getRandomColor())
);
