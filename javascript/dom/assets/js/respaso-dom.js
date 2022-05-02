const $padre = document.querySelector(".padre");

//create for ma más correcta
const $parr = document.createElement("p");
$parr.textContent = "Lorem ipsum";
$parr.textContent += "Lorem ipsum";
$parr.textContent += "Lorem ipsum";

$padre.appendChild($parr);

// /agregar elemtnos con InnerHTML
// const $cuuadro = document.querySelector(".cuadro");
// $cuuadro.innerHTML = ""; //incialilizar el contenido del elemento

// const $enlace = document.createElement("a"); //crear un enlace
// $enlace.innerHTML = "";

// const estaciones = ["primaera", "verano", "otoño", "invierno"];

// const $lista = document.createElement("ul");

// // const

// estaciones.forEach((elemento) => {
//   console.log(elemento);
//   const $li = document.createElement("li");
//   $li.textContent = estacion;
//   $lista.appendChild($li);
// });

// document.body.appendChild($lista);

// $cuadro.appendChild($lista);

//pendiente}

const continentes = ["Africa", "America", "Asia", "Europa"];

const $ol = document.createElement("ol");
$cuadro.appendChild("cuadro");
continentes.forEach((continente) => {
  $ol.innerHTML = +`<li>${continentes}</li>`;
});
