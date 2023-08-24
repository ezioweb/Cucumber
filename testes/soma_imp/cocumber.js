module.exports = {
    default: `--format-options '{"snippetInterface": "synchronous"}'`
  }

  const { defineSupportCode } = require('@cucumber/cucumber');

  defineSupportCode(({ setWorldConstructor }) => {
    setWorldConstructor(function () {
      this.t = (step) => new RegExp(step);
  
      this.translateKeyword = (keyword) => keyword;
    });
  });
  