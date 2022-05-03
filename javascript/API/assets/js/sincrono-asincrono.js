// setInterval();

// let tiempo = 5000;
// let datos;
// setTimeout(() => {
//   let datos = "Jonathan";
//   console.log(datos);
// }, tiempo);
// console.log(datos);

// console.log("Hola");

const datos = [
  {
    nombre: "Luis",
    edad: 23,
  },
  {
    nombre: "Jon",
    edad: 24,
  },
  {
    nombre: "Jorge",
    edad: 28,
  },
];

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return datos;
    }, 3000);
  });
  // console.log(datos);
}

obtenerDatos().then((datos) => {
  console.log(datos);
});

async function obtenerDatosAsync() {
  const datosObtenidos = await obtenerDatos();
  console.log(datosObtenidos);
}

obtenerDatosAsync();
