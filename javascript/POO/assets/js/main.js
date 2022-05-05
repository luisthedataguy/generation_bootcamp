class Persona {
  // constructor() {}
  #id = "";
  static #contador = 0;
  #nombre = "";
  #edad = 0;
  #correo = "";
  constructor(nombre, edad, correo) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#correo = correo;
    this.#correo = correo;
    this.id = ++this.contador;
  }

  get getNombre() {
    return this.#nombre;
  }

  set setNombre(nombre) {
    this.#nombre = nombre;
  }
  //metodo
  cambiarNombre(nombre) {
    this.#nombre = nombre;
  }

  get getEdad() {
    return this.#edad;
  }

  set setNombre(edad) {
    this.#edad = edad;
  }
  //metodo
  cambiarEdad(edad) {
    this.#edad = edad;
  }

  get getCorreo() {
    return this.#correo;
  }

  set setCorreo(correo) {
    this.#correo = correo;
  }
  //metodo
  cambiarCorreo(correo) {
    this.#correo = correo;
  }

  saludar() {
    let mensaje = `Hola mi nombre es ${this.getNombre}`;
    return mensaje;
  }

  mostrarSaludo() {
    return this.#saludar();
  }
  static mostrarContador() {
    return ++contador;
  }
}

//instancia
const persona1 = new Persona("Luis", 23, "luis@gmail.com");
const persona2 = new Persona("Pedro", 32, "pedro@gmail.com");

// // console.log(persona1.nombre);
// console.log(persona2);

// // persona1.setNombre = "Jose";
// persona1.cambiarNombre("Antonio");

// console.log(persona1.getNombre);
// console.log(persona1);

console.log(persona1);
console.log(persona2);
// console.log(persona3);
console.log(persona1.saludar());
console.log(Persona.contador);
