const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let primeiroNumero, segundoNumero, resultado;

Given('que eu tenho o programa aberto na linha de comando', function () {
  // Não é necessário implementar nessa linha
});

When('o programa for iniciado', function () {
  // Não é necessário implementar nessa linha
});

Then('ele deve solicitar que eu insira o primeiro número', function () {
  // o usuário inseriu o número 5
  primeiroNumero = 5;
});

Given('que eu inseri o primeiro número', function () {
  // Não é necessário fazer nada nessa linha
});

When('o primeiro número for aceito pelo programa', function () {
  // Não é necessário fazer nada nessa linha
});

Then('ele deve solicitar que eu insira o segundo número', function () {
  // o usuário inseriu o número 5
  segundoNumero = 8;
});

Given('que eu inseri o segundo número', function () {
  // Não é necessário fazer nada nessa linha
});

When('o segundo número for aceito pelo programa', function () {
  // calculo da soma
  resultado = primeiroNumero + segundoNumero;
});

Then('ele deve calcular a soma dos dois números e exibir o resultado na tela', function () {
  // Verificando se a soma está correta:
  assert.strictEqual(resultado, 13)
});