/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker/locale/es_MX";

const email = faker.internet.email();
const username = `${faker.internet.username()}${Math.round(
  Math.random() * 1000
)}`;

Given(`User navigate to {string}`, (menu) => {
  cy.visit("/");
  cy.searchMenu(menu);
});

When(`User ingress name and email and confirm`, () => {
  cy.ingressName(username).ingressEmail(email).submitSignUp();
});

Then(`Access successfully at {string}`, (title) => {
  cy.validTitleSignup(title);
});

Then(`Username and email are preloaded`, () => {
  cy.preloadedInputs(username, email);
});
