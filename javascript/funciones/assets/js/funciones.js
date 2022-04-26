// Funciones,nos permiten reutilizar codigo//

// function saludar() {
//   let nombre = false;
//   console.log(`Hola mi nombre es: ${nombre ? "Luis" : "Desconocido"}`);
// }
// saludar();

// // document.write("<h1>Este es un h1</h1>");
// // console.log(`<h1>Este es un h1</h1>`);
// // console.log();

// function saludar(nombre = "panchito", apellido = "") {
//   return `mi nombre es ${nombre} ${apellido}`;
//   // console.log("Hola mi nombre es:", nombre, apellido);
//   // console.log(`Hola mi nombre es ${nombre}`);

//   // console.log(`hola mi nombre es ${nombre ? "Raul" : "desconocido"}`);
// }
// saludar("Pedro", "Perez");

// let funcionSaludar = saludar(`Felipe`, `Maqueda`);
// console.log(funcionSaludar);

// // console.log(funcionSaludar((`Alberto`, `Hernandez`).toUpperCase());
// console.log(saludar.toUpperCase);

// document.write("<h1>Este es un h1</h1>");
// console.log(`<h1>Este es un h1</h1>`);
// console.log();

// function suma(a, b) {
//   return a + b;
// }

// console.log(suma(10, 20));

// // Funciones expresadas/ funcion expresion

// const resta = function (a, b) {
//   return a - b;
// };

// console.log(resta(30, 10));

// const multiplicacion = (a, b) => {
//   return a * b;
// };

// console.log(multiplicacio(40, 4));

// const multiplicacio = (a, b) => a * b;

// console.log(multiplicacio(40, 5));

// // Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH"

function reverse(s) {
  return s.split("").reverse().join("");
}

var sss = reverse("Hola mundo");
console.log(sss);
