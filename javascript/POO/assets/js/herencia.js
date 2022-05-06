class Pokemon {
  //atributos
  #nombre = "";
  #edad = 0;
  #evolucion;
  // #tipo = "";

  constructor(nombre, edad, evolucion, tipo) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#evolucion = evolucion;
    // this.#tipo = tipo;
  }

  get nombre() {
    return this.#nombre;
  }

  atacar() {
    return console.log(`${this.#nombre}, esta atacando`);
  }

  evolucionar() {
    //operador de cortocircuito
    //false => toma el valor de la izquierda
    //true => toma el valor de la derecha
    const EVOLUCION = this.#evolucion;
    let mensaje = "";

    if (this.#evolucion === "") {
      let mensaje = "No puedo evolucionar";
      console.log(mensaje);
    } else {
      mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`;
      this.$nombre = this.#evolucion;
      console.log(mensaje);
    }
    return console.log(mensaje);
  }
}

// const charmander = new Pokemon("Charmander", 2, "", "fuego");
// const bulbasaur = new Pokemon("Bulbasaur", 1, "Ivisaur", "Planta");

// charmander.atacar();
// bulbasaur.atacar();
// charmander.evolucionar();
// console.log(charmander);

//clase hija
class TipoFuego extends Pokemon {
  #tipo = "";
  constructor(nombre, edad, evolucion, tipo) {
    super(nombre, edad, evolucion);
    this.#tipo = "fuego";
  }

  atacar() {
    return console.log(
      `${super.nombre}, esta lanzado un ataque de tipo ${this.#tipo}`
    );
  }
}

let nombre = "charmander";
const charmander = new TipoFuego("charmander", 2, "Charmelon");
console.log(charmander);

charmander.atacar();
charmander.evolucionar();
