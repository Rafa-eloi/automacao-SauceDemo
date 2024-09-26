const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env: {
    allureReuseAfterSpec: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      allureWriter(on, config);
      return config;
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
});
