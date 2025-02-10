import "allure-cypress";
import 'cypress-real-events';
import './commands';

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });