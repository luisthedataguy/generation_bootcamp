const $card = document.querySelector(`.card`);
const $form = document.querySelector(`form`);

$form.addEventListener("submit", (e) => {
  // const datos = Object.fromEntries(new FormData(e.target));
  e.preventDefault();

  const datos = Object.fromEntries(new FormData(e.target));

  crearElemento(datos.url, datos.texto);
  $form.reset();

  // console.log(datos);
});

function crearElemento() {
  const img = document.createElement("img");
  const txt = document.createElement("figcaption");
  img.src = url;
  img.alt = texto;

  txt.textContent = texto;
  // "https://i.pinimg.com/550x/28/05/23/280523cbed6d11100778106d925c94ec.jpg";
  $card.appendChild(img);
  $card.appendChild(txt);
}

// crearElemento();
