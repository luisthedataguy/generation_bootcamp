//escribe un ciclo anidado que imprima el siguiente patrón.

// *
//  * *
//  * * *
//  * * * *
//  * * * * *

// for (let i = 1; i <= 5; i++) {
//   //1 //1
//   for (let j = 1; j <= i; j++) {
//     //5 //5
//     document.write("*");
//     // console.log("*");
//     // console.log("ciclohijo\n");
//   }
//   document.write(`<br>`);
// }

//Escribe un loop que haga lo siguiente:

//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.

// input1.addEventListener("change", function(){
//     let input1= document.getElementById("input1").value;
//     while(input1>0){
//         document.getElementById("res1").innerHTML += input1 + " ";
//         input1 -= .5;
//     }
// });

// <div id="ej1" style="background-color: aquamarine;">
//         <h3>Valor decremental en .5</h3>
//         <input type="number" id="input1">
//         <button id="calcula">calcular</button>
//         <button id="reset1">reset</button>
//         <p id="res1"></p>

//     </div>
// es1").innerHTML += input1 + " ";
//         input1 -= .5;
//     }
// });
// reset1.addEventListener("click", function(){
//     document.getElementById("res1").innerHTML = "";
// });

// Ejercicio 2
//mprime todos los números impares entre 1 y 100I++

// let num1 = parseInt(prompt("Introduzca el primer número"));
// let num2 = parseInt(prompt("Introduzca el segundo número"));

// document.write(
//   "Los números impares que existen entre " + num1 + " y " + num2 + " son: "
// );

// for (var i = num1; i < num2; i++) {
//   if (i % 2 != 0) {
//     document.write("<br>" + i);
//   }
// }

for (var i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    document.getElementById("res2").innerHTML += i + " ";
  }
}

// Ejercicio 3
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]

// // using the function
// makeSquare(document.querySelector("#square"), 5, "*");

// control++;

// Ejercicio 4
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n

//ejemplo: n = 5 sum = 15
//por que (1 + 2 + 3 + 4 +5 )

// while (x <= 100) {
//   const x = 1;
//   const suma = 0;
//   suma = suma + x;
//   x += 1;
// }
// console.log(`La suma de los numeros del 1 al 100 es: ${suma}`);
