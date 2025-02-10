/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "{string} go to {string} page from shop store",
  (user: string, menu: string) => {
    cy.visit("/");
    cy.navigateTo(menu);
  }
);

When("He hover over first product and click {string}", (buttonName) => {
  cy.addProduct(1);

  /* cy.get('SELECTOR_DEL_PRIMER_PRODUCTO') // Reemplaza 'SELECTOR_DEL_PRIMER_PRODUCTO' con el selector del primer producto
      .trigger('mouseover')
      .get('SELECTOR_BOTON_ADD_TO_CART') // Reemplaza 'SELECTOR_BOTON_ADD_TO_CART' con el selector del botón "Add to cart"
      .click(); */
});

When("Click {string} button from confirm modal", (buttonName: string) => {
  /* cy.get('SELECTOR_BOTON_CONTINUE_SHOPPING') // Reemplaza 'SELECTOR_BOTON_CONTINUE_SHOPPING' con el selector del botón "Continue Shopping"
      .click(); */
});

When(
  "He hover over second product and click {string}",
  (buttonName: string) => {
    /* cy.get('SELECTOR_DEL_SEGUNDO_PRODUCTO') // Reemplaza 'SELECTOR_DEL_SEGUNDO_PRODUCTO' con el selector del segundo producto
      .trigger('mouseover')
      .get('SELECTOR_BOTON_ADD_TO_CART') // Reemplaza 'SELECTOR_BOTON_ADD_TO_CART' con el selector del botón "Add to cart"
      .click(); */
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
