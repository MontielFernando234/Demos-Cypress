/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Cart from "../../lib/SingletonCart";

const cart = Cart.getInstance();

Given(
  "{string} go to {string} page from shop store",
  (user: string, menu: string) => {
    cy.visit("/");
    cy.navigateTo(menu);
  }
);

When("He hover over first product and click {string}", (buttonName: string) => {
  cy.addProduct(buttonName, cart, 1, 1);
});

When("Click {string} button from confirm modal", (buttonName: string) => {
  buttonName === "Continue Shopping"
    ? cy.continueShopping(buttonName)
    : cy.viewCartFromModalProductAdded(buttonName);
});

When(
  "He hover over second product and click {string}",
  (buttonName: string) => {
    cy.addProduct(buttonName, cart, 2, 1);
  }
);

Then("Both products are added to Cart", () => {
  cy.validateProductsInCart(cart);
});

Then("Their prices, quantity and total price are displayed correctly", () => {
  cy.validateQuantityAndTotalPrice(cart);
});
