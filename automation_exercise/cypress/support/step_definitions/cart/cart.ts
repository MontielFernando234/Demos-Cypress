/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "{string} go to {string} page from shop store",
  (user: string, menu: string) => {
    cy.visit("/");
    cy.navigateTo(menu);
  }
);

When("He hover over first product and click {string}", (buttonName: string) => {
  cy.addProduct(1);
});

When("Click {string} button from confirm modal", (buttonName: string) => {
  buttonName === "Continue Shopping"
    ? cy.continueShopping(buttonName)
    : cy.viewCartFromModalProductAdded(buttonName);
});

When(
  "He hover over second product and click {string}",
  (buttonName: string) => {
    cy.addProduct(2);
  }
);

Then("Both products are added to Cart", () => {
  /*  cy.get('SELECTOR_PRODUCTO_EN_EL_CARRITO') // Reemplaza 'SELECTOR_PRODUCTO_EN_EL_CARRITO' con el selector de los productos en el carrito
      .should('have.length', 2); */
});

Then("Their prices, quantity and total price are displayed correctly", () => {
  /* cy.get('SELECTOR_PRECIO_PRODUCTO') // Reemplaza 'SELECTOR_PRECIO_PRODUCTO' con el selector del precio del producto
      .should('be.visible');
    cy.get('SELECTOR_CANTIDAD_PRODUCTO') // Reemplaza 'SELECTOR_CANTIDAD_PRODUCTO' con el selector de la cantidad del producto
      .should('be.visible');
    cy.get('SELECTOR_PRECIO_TOTAL') // Reemplaza 'SELECTOR_PRECIO_TOTAL' con el selector del precio total
      .should('be.visible'); */
});
