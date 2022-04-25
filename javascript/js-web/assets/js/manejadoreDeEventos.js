addEventListener("load", function () {
  this.alert("se ha terminado de cargar la pagina");
});

function saludar() {
  alert("Hola");
}
// Manejador de eventos semantico
const $botonSemantico = document.getElementById("evento-semantico");

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function (evento) {
  // alert("Hola desde un manejador semantico");
  console.log(evento.target);
};

// Manejador de venetos multiple
// const $botonMultiple = document.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// Manejador de venetos multiple
const $botonMultiple = document.getElementById("evento-multiple");
$botonMultiple.addEventListener("click", saludarMultiple);
$botonMultiple.addEventListener("click", function (e) {
  console.log(e.target);
});

function saludarMutiple() {
  alert("hola desde manejador multiple");
}
