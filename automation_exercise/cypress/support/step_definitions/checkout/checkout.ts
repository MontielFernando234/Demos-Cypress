/// <reference types="cypress"/>

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as allure from "allure-js-commons";
import DataGenerator from "../../lib/DataGenerator";
import { PaymentData } from "../../lib/DataGenerator";

function createPaymentData() {
  const paymentData = DataGenerator.generatePaymentData();
  cy.wrap(paymentData).as("newPaymentData");
}

When("Go to checkout and clicked {string} button", (buttonName: string) => {
  allure.step(`Go to checkout and clicked ${buttonName} button`, (s) => {
    s.parameter("buttonName: ", buttonName);
    cy.proceedToCheckout(buttonName);
  });
});

When(
  "Go to fill payment data doing click {string} button",
  (buttonName: string) => {
    allure.step(
      `Go to fill payment data doing click ${buttonName} button`,
      () => {
        cy.goToPaymentData(buttonName);
        createPaymentData();
      }
    );
  }
);

When("Fill Card Data", () => {
  allure.step("Fill Card Data", () => {
    cy.get("@newPaymentData").then((paymentData) => {
      const pd = paymentData as unknown as PaymentData;
      cy.fillCardData(
        pd.nameCard,
        pd.cardNumber,
        pd.cvc,
        pd.monthExp,
        pd.yearExp
      );
    });
  });
});

When("Confirm order doing click {string} button", (buttonName: string) => {
  allure.step(`Confirm order doing click ${buttonName} button`, () => {
    cy.confirmOrder(buttonName);
  });
});

Then(
  "{string} see the title {string} and the message {string}",
  (user: string, title: string, message: string) => {
    allure.step(
      `${user} see the title ${title} and the message ${message}`,
      () => {
        cy.validatePaymentSuccess(title, message);
      }
    );
  }
);
