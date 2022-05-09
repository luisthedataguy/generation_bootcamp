//importar
const { default: TestRunner } = require("jest-runner");
const { palindrome } = require("../pruebas-unitarias2");

//primer stst unitario

test("palindrome de generation", () => {
  const resultado = palindrome("generation");

  //comparar
  expect(resultado).toBe("noitareneg");
});

test("palindrome usando un string vacio", () => {
  const resultado = palindrome("");

  //comparar
  expect(resultado).toBe("");
});
// suma(1, 3) === 4;

test("palindrome usando usando undefined", () => {
  const resultado = palindrome();

  //comparar
  expect(resultado).toBe();
});
