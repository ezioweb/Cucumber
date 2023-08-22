const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

let primeiroNumero;
let segundoNumero;
let resultado;

Given('que o usuário inseriu o primeiro número inteiro como {string}', function (valor) {
  primeiroNumero = parseInt(valor);
});

Given('o usuário inseriu o segundo número inteiro como {string}', function (valor) {
  segundoNumero = parseInt(valor);
});

When('o usuário executar o comando de soma dos dois números', function () {
  resultado = primeiroNumero + segundoNumero;
});

Then('o sistema deve calcular a soma como {string}', function (valorEsperado) {
  const resultadoEsperado = parseInt(valorEsperado);
  assert.strictEqual(resultado, resultadoEsperado);
});