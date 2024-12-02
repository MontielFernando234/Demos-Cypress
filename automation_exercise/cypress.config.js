const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureCypress = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: "**/*.feature",
    screenshotOnRunFailure: true,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );

      allureCypress.allureCypress(on, config);

      return config;
    },
  },
});
