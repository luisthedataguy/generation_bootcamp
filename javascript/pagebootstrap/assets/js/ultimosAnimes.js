const url = "https://api.jikan.moe/v4/seasons/now";
const ultimosAnimes = document.getElementById("ultimosAnimes");

fetch(url)
  .then((resp) => resp.json())
  .then((datos) => {
    // console.log(datos);

    const arregloAnimeUltimos = datos.data.slice(0, 16);
    // console.log(arregloAnimeUltimos);

    arregloAnimeUltimos.forEach((anime) => {
      // console.log(anime);
      const datosNecesarios = {
        nombre: anime.title,
        imagen: anime.images.jpg.image_url,
        id: anime.mal_id,
        sinopsis: anime.synopsis,
      };
      const template = `<div class="col mb-4">
      <a href="" 
      <div class="card h-100">
            <img src="${datosNecesarios.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${datosNecesarios.nombre}</h5>
                    <p class="card-text">${"Sinopsis"}</p>
                </div>
        </div>
        </div>`;
      ultimosAnimes.innerHTML += template;
      // console.log(datosNecesarios);
      // ${datosNecesarios.sinopsis}
    });
  });
