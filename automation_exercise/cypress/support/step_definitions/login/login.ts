/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as allure from "allure-js-commons";

Given(`User {string} navigate to {string} in shop store`, (userName :string, menu :string) => {
  allure.tag("US02");
  allure.tag("Login");
  allure.epic("Login");
  allure.feature("User Login");
  allure.story("User Login");

  let us = userName;
  cy.wrap(us).as("username");

  allure.step(`User ${userName} navigate to ${menu} in shop store`, () => {
    cy.visit("/");
    cy.navigateTo(menu);
  });
});

When(`User type mail {string} and Password {string}`, (mail :string, pwd :string) => {
  allure.tag("US02");
  allure.tag("Login");
  allure.epic("Login");
  allure.feature("User Login");
  allure.story("User Login");

  allure.step(`User type mail ${mail} and Password ${pwd}`, () => {
    allure.step(`type mail and password`, () => {
      cy.ingressLoginEmail(mail).ingressLoginPassword(pwd);
    });
  });
});

When(`send credentials`, () => {
  allure.tag("US02");
  allure.tag("Login");
  allure.epic("Login");
  allure.feature("User Login");
  allure.story("User Login");

  allure.step(`Click en submmit button`, () => {
    cy.submitLogin();
  });
});

Then("User see the text {string} together with the username", (string :string) => {
  allure.tag("US02");
  allure.tag("Login");
  allure.epic("Login");
  allure.feature("User Login");
  allure.story("User Login");

  allure.step(`User see the text ${string} together with the username`, () => {
    cy.get("@username").then((userData) => {
      let ud = userData as unknown as string;
      allure.step(
        `Check the text ${string} ${userData} is visible`,
        () => {
          cy.validLogin(string, ud);
        }
      );
    });
  });
});
