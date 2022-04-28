// Ciclo for

// for
//for... in
// forEach+

//imprimir la frase ¨Hola mundo¨

// for (var i = 0; i < 9; i++) {
//   n += i;
//   mifuncion(n);
// }

// /imprimir la frase "hola mundo" 10 veces
// Inciailizamos la variable: condicion; modificador del contador
for (let i = 0; i < 10; i++) {
  console.log("Hola mudno", i); //iteracion
  // debugger;
}

//while
let control = 0; // en en ciclo for es i

while (control <= 10) {
  console.log("Hola desde un ciclo while", control);

  control++; //modificador de la variable control
}

// do .... while

let i = 1;
do {
  console.log("hola desde un do..while", i);
  i++;

  debugger;
} while (i <= 5);
