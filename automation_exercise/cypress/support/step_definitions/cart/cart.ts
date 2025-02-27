/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Cart from "../../lib/SingletonCart";
import * as allure from "allure-js-commons";

const cart = Cart.getInstance();

Given(
  "{string} go to {string} page from shop store",
  (user: string, menu: string) => {
    allure.tags("US06", "Cart");
    allure.epic("Cart");
    allure.feature("Product Cart");
    allure.story("Cart Management");

    allure.step(`${user} go to ${menu} page from shop store`, (s) => {
      s.parameter("user: ", user);
      s.parameter("menu: ", menu);

      allure.step(`Go to Homepage from shop store`, () => {
        cy.visit("/");
      });

      allure.step(`Navigate to ${menu} page`, () => {
        cy.navigateTo(menu);
      });
    });
  }
);

When("He hover over first product and click {string}", (buttonName: string) => {
  allure.parameter("buttonName: ", buttonName);
  allure.step(`He hover over first product and click ${buttonName}`, () => {
    cy.addProduct(buttonName, cart, 1, 1);
  });
});

When("Click {string} button from confirm modal", (buttonName: string) => {
  allure.parameter("buttonName: ", buttonName);
  allure.step(`Click ${buttonName} button from confirm modal`, (sp) => {
    buttonName === "Continue Shopping"
      ? cy.continueShopping(buttonName)
      : cy.viewCartFromModalProductAdded(buttonName);
  });
});

When(
  "He hover over second product and click {string}",
  (buttonName: string) => {
    allure.parameter("buttonName: ", buttonName);
    allure.step(`He hover over second product and click ${buttonName}`, () => {
      cy.addProduct(buttonName, cart, 2, 1);
    });
  }
);

Then("Both products are added to Cart", () => {
  allure.step(`Both products are added to Cart`, () => {
    cy.validateProductsInCart(cart);
  });
});

Then("Their prices, quantity and total price are displayed correctly", () => {
  allure.step(
    `Their prices, quantity and total price are displayed correctly`,
    () => {
      cy.validateQuantityAndTotalPrice(cart);
    }
  );
});
