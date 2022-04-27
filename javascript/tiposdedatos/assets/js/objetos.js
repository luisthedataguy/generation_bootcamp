//

const nombre = "Jonathan";

const nombre2 = new String("Yair");

const persona = new Object();
persona.nombre = "Jonathan";
persona.apellido = "Garcia";
persona.edad = "23";

// console.log(nombre.toLowerCase());
// console.log(nombre2.toLowerCase());

const nuevaPersona = {
  nombreCompleto: {
    nombre: "Yair",
    apellido: "Uriostegui",
  },
  edad: 23,
  pasatiempos: ["nadar", "dibujar", "anime"],
  tieneTrabajo: true,
  saludar: function () {
    console.log("Hola");
  },
  sumar: function (n1, n2) {
    console.log(`El resultado de la suma es ${n1 + n2}`);
  },
};
// atributo o propiedad

"Hola".length;
// METODO
"HOLA".toLowerCase;

console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[1]);
nuevaPersona.sumar(5, 120);

nuevaPersona.saludar();

// Para cambiar el valor

nuevaPersona.edad = 10;
console.log(nuevaPersona.edad);

// Agregar nuevo atributo
nuevaPersona.colorFavorito = "Morado";
console.log(nuevaPersona.colorFavorito);

console.log(Object.keys(nuevaPersona));

console.log(nuevaPersona.hasOwnProperty("edad"));

const Luis = {
  nombreCompleto: {
    nombre: "Luis",
    apellido: "García",
  },
  edad: 23,
  pasatiempos: ["series", "ejercicio", "dormir"],
};

const santiago = {
  nombreCompleto: {
    nombre: "carlos",
    apellido: "cruz",
  },
  edad: 29,
  pasatiempos: ["futbol", "estudiar", "anime"],
};

const Daniel = {
  nombreCompleto: {
    nombre: "Daniel",
    apellido: "Perez",
  },
  edad: 24,
  pasatiempos: ["fotografia", "peliculas", "leer"],
};

const Donovan = {
  nombreCompleto: {
    nombre: "Donovan",
    apellido: "Martinez",
  },
  edad: 24,
  pasatiempos: ["futbol", "Lectura", "anime"],
};

const gabriel = {
  nombreCompleto: {
    nombre: "ganriel",
    apellido: "gonzalez",
  },
  edad: 20,
  pasatiempos: ["jugar", "salir", "correr"],
};

const Arantxa = {
  nombreCompleto: {
    nombre: "Arantxa",
    apellido: "Perez",
  },
  edad: 26,
  pasatiempos: ["caminar", "patinar", "musica"],
};

const angel = {
  // ATRIBUTOS
  nombreCompleto: {
    nombre: "Angel",
    apellido: "Lopez",
  },
  edad: 23,
  pasatiempos: ["cine", "correr", "dibujar"],
};

const cohorte12 = [angel, Arantxa, gabriel, Luis, Daniel, Donovan, santiago];
console.log(cohorte12[0]);

for (let i = 0; i < cohorte12.length; i++) {
  console.log(cohorte12[i].pasatiempos.includes("leer"));
  console.log(cohorte12[1].nombreCompleto.nombre);
}
