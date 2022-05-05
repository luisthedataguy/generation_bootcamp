let busquedaInf = window.location.href.split("=").pop();
console.log(busquedaInf);

const urlBusqueda = `https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`;
const busquedaAnimes = document.getElementById("busquedaAnimes");

fetch(urlBusqueda)
  .then((resp) => resp.json())
  .then((datos) => {
    console.log(datos);
    const resultadosBusqueda = datos.data;

    resultadosBusqueda.forEach((resultado) => {
      console.log(resultado);

      const datosNecesarios = {
        nombre: resultado.title,
        imagen: resultado.images.jpg.image_url,
      };
      const template = `<div class="col mb-4">
        <div class="card h-100">
            <img src="${datosNecesarios.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${datosNecesarios.nombre}</h5>
                    <p class="card-text">${"Sinopsis"}</p>
                </div>
        </div>
        </div>`;
      busquedaAnimes.innerHTML += template;
    });
  });
