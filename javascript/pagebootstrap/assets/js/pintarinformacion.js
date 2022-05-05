const idInfo = window.location.href.split("=").pop();

console.log(idInfo);

const imagenPortada = document.getElementById("imagenPortada");

const urlId = `https://api.jikan.moe/v4/anime/${idInfo}`;

fetch(urlId)
  .then((resp) => resp.json())
  .then((datos) => {
    console.log(datos.data);
    const datosNecesarios = {
      id: datos.data.mal_id,
      imagen: datos.data.images.jpg,
      nombre: datos.data.title,
    };

    const template = `<h1>${datosNecesarios}</h1>
    <p>${datosNecesarios.sinopsis}</p>
    <div class="favorito"><button type="button"</div>`;

    imagenPortada.innerHTML = templateImg;
    console.log(datosNecesarios);
  });

const agregarFavoritos = document.getElementById("agregarFavoritos");
console.log(agregarFavoritos);

agregarFavoritos.addEventListener("click", () => {
  const datos = {
    id: datosNecesarios.id,
    nombre: datosNecesarios.nombre,
    imagen: datosNecesarios.imagen,
  };

  // const favoritos = [];
  // favoritos.push(datos);

  if (localStorage.getItem("favoritos")) {
    console.log("existe un elemnto");
    const favoritos.push(datos);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  } else {
    console.log("No tienes favoritos");
    const favoritos = [];
    favoritos.push(datos);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  // JSON.parse(localStorage.getItem("favoritos"));

  // localStorage.setItem("favoritos", JSON.stringify(favoritos));
});
