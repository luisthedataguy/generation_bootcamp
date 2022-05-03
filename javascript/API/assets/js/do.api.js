const url = "https://dog.ceo/api/breeds/image/random";
const imagen = document.getElementById("imagenPerrito");
const imagen2 = document.getElementById();
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos.message);
    imagen.src = datos.message;
  });

obtenerPerrito();

async function obtenerPerrito() {
  const infoPerritos = await fetch(url);
  //console.log(infoPerritos);
  const perrito = await infoPerritos.json();
  console.log(perrito);
  imagen2.src = perrito.message;
}
