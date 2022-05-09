const suma = (a, b) => {
  return a + b;
};

console.log(suma(1, 3) === 2);
console.log(suma(0, 0) === 0);

const arr = [
  { a: 1, b: 3, result: 4 },
  { a: 7, b: 5, result: 4 },
  { a: 5, b: 5, result: 5 },
  { a: 6, b: 7, result: 413 },
];

arr.forEach((prueba) => {
  const { a, b, resultado } = prueba;
  console.assert(
    suma(a, b) === result,
    `suma de ${a} y ${b} deberia ser ${result}`
  );
});

// console.assert(suma(1, 3) === 4, `èl resultado de la suma debería de ser 11`);
