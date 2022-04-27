// const anioNacimiento = parseInt(prompt("Escribe tu año de nacimiento: "));
// const anioActual = 2022;
// console.log(anioNacimiento);

// console.log(`Tienes ${anioActual - anioNacimiento} años`);

//nivel 2

// const anioActual = 2022;

// function calcularEdad() {
//   const anioNacimiento = parseInt(document.getElementById("anio").value);

//   console.log(anioNacimiento);
//   console.log(`Tienes ${anioActual - anioNacimiento} años`);
// }

// const buton = document.getElementById("calcular");
// console.log(buton);

// buton.addEventListener("click", () => {
//   const anioNacimiento = parseInt(document.getElementById("anio").value);

//   console.log(anioNacimiento);
//   console.log(`Tienes ${anioActual - anioNacimiento} años`);
// });

//opcion 2

//opcion 3

const fecha = new Date();
const anio = fecha.getFullYear();
console.log(anio);

// const = fecha.getMonth() + 1
// console.log(dia);

const anioActual = 2022;
const mesActual = 4;
const diaActual = 27;

function mostrarDatos() {
  const nacimiento = document.getElementById("anio").value;
  console.log(nacimiento);
  const nacimientoDvidido = nacimiento.split("-");
  console.log(nacimientoDvidido);
  const anioNacimiento = parseInt(nacimientoDvidido[0]);
  const mesNacimiento = parseInt(nacimientoDvidido[1]);
  const diaNacimiento = parseInt(nacimientoDvidido[2]);
  console.log(anioNacimiento, mesNacimiento, diaNacimiento);

  if (mesNacimiento <= mesActual && diaNacimiento <= diaActual) {
    console.log(`Tienes ${anioActual - anioNacimiento} años`);
    console.log("Perdon por no felicitarte");
  } else {
    console.log(`Tienes ${anioActual - anioNacimiento - 1} años`);
    console.log("¿Que quieres que te regale?");
  }
}
