const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function canRequest(status) {
  if (status === "liberado") {
    return "liberado";
  } else {
    return "negado";
  }
}

Given('O limite está {string}', function (givenStatus) {
  this.status = givenStatus;
});

When('o cliente solicita um cartão de crédito', function () {
  this.actualAnswer = canRequest(this.status);
});

Then('Seu cartão foi {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

function canRequest(status) {
    return 'negado';
  }

  Given('O limite está liberado', function () {
    this.status = 'liberado';
  });

  function canRequest(status) {
    if (status === "liberado") {
      return "solicitado";
    } else {
      return "negado";
    }
  }