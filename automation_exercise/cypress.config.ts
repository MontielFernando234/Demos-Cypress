import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {
  addCucumberPreprocessorPlugin,
} from "@badeball/cypress-cucumber-preprocessor";
import {
  createEsbuildPlugin,
} from "@badeball/cypress-cucumber-preprocessor/esbuild";
import {allureCypress} from "allure-cypress/reporter"; // Importación corregida

export default defineConfig({
  projectId: 'isgmbk',
  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: "**/*.feature",
    screenshotOnRunFailure: true,
    async setupNodeEvents(
      on: Cypress.PluginEvents, // Tipado para 'on'
      config: Cypress.PluginConfigOptions // Tipado para 'config'
    ): Promise<Cypress.PluginConfigOptions> { // Tipado para el retorno
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );

      allureCypress(on, config);

      return config;
    },
  },
});