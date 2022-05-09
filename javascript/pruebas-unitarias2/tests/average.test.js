const { default: TestRunner } = require("jest-runner");
const { average } = require("../pruebas-unitarias2");

// describe("average", () => {
//   test("ingresar un valor", () => {
//     const resultado = average([1]);
//     expect(resultado).toBe(1);
//   });
// });

// describe("average", () => {
//   test("ingresar un valor", () => {
//     const resultado = average([1]);
//     expect(resultado).toBe(1);
//   });
// });

test("ingresar un valor", () => {
  // const resultado = average([1]);
  expect(average([1])).toBe(1);
});

test("ingresar un valor", () => {
  // const resultado = average([1]);
  expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
});

//crear un test para probar un valor undefined
// test("ingresar un valor", () => {
//   // const resultado = indefinico()
//   // const resultado = average([1]);
//   expect(average()).toBeUndefined(undefined);
// });

test("average probando usando undefined", () => {
  // const resultado = average([]);

  //comparar
  expect(average()).toBeUndefined();
});

test("average probando usando undefined", () => {
  // const resultado = average([]);

  //comparar
  expect(average([])).toBe();
});
