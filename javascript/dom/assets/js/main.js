// este es un comentario
const $titulo = document.querySelector("h1");
const $parr = document.querySelector("p");
const $card = document.querySelector(`.card`);
console.log($titulo.nodeName);
console.log($parr.nodeName);

console.log($parr.textContent);

$parr.textContent += "Hola Mundo!";
console.log(``);
$titulo.textContent = "Modificando elementos javascript";

//innerHtml

console.log($parr.innerHTML);
// $parr.innerHTML += `<a href="#">Este es un enlace</a>`;

// outerHtml reemplaza todo el elemntp, incluso todo incluso el elmento que seleccionamos
//%parr.innerHTML
$parr.outerHTML = `<a href="#">Este es un enlace</a>`;

//Crear elementos de html
console.log(document);

function crearElemento() {
  const img = document.createElement("img");
  img.src =
    "https://i.pinimg.com/550x/28/05/23/280523cbed6d11100778106d925c94ec.jpg";
  $card.appendChild(img);
}

crearElemento();
