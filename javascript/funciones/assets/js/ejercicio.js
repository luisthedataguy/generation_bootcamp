// const invertir = (palabra = "") => {
//   if (palabra.length <= 1) return console.warn("No ingresaste texto");
//   if (typeof palabra !== "string")
//     return console.error("el valor ingresado no es una palabra");
//   let arreglo = palabra.split("");
//   let reverso = arreglo.reverse();
//   let unir = reverso.join("");
//   return console.log(unir);
// };

// invertir(2222);

// 1- Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 2- Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// 3- Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// 4- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// function reverse(s) {
//   return s.split("").reverse().join("");
// }

// var sss = reverse("Hola mundo");
// console.log(sss);

// function wordMulti(s) {
//   return s.repeat("") * n;
// }

// var ss = wordMulti("Hola mundo", n);

// console.log(ss);

// const userCounter = n;

// const wordsRepeat = Array(userCounter).fill("N");

// console.log(wordsRepeat);

// function repeat(stringToRepeat, number) {
// let result = "";
// for (let i = 0; i < number; i++) {
//   result += stringToRepeat;
//   console.log(result);
// }

// repeat("Hola" , 3)

// function repeat(stringToRepeat, number) {
//   let result = stringToRepeat.repeat(number);
//   console.log(result);
// }

// repeat("Hola Mundo ", 3);

// function subtring(cadena, ) {

// }
// var cadena = "abcdefghij";

// console.log("(1,2): " + cadena.substr(1, 2)); // '(1, 2): bc'

// function strinTrim(word, n) {
//   let text = word;
//   let result = text.trim(n);
//   console.log(result);
// }

// strinTrim("Hola mundo", 5);

// function stringTrim(word, n) {
//   let TextoBase = word;
//   let TextoCorto = TextoBase.substring(TextoBase.length, n);
//   console.log(TextoCorto);
// }

// stringTrim("Hola Mundooo", 7);

// 1- Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function palindromeChecker(str) {
  const texPalindromo = str.split("").reverse().join("");

  return texPalindromo === str ? "true" : "false";
}
console.log(palindromeChecker(""));

// 2- Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repeat(stringToRepeat, number) {
  let result = stringToRepeat.repeat(number);
  console.log(result);
}

repeat("Hola Mundo ", 3);

// 3- Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function stringTrim(word, n) {
  let TextoBase = word;
  let TextoCorto = TextoBase.substring(TextoBase.length, n);
  console.log(TextoCorto);
}

stringTrim("Hola Mundooo", 7);

// 4- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
function factorial(numero) {
  let total = 1;
  for (i = 1; i <= numero; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorial(5));
