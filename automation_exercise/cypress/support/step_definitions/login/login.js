/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as allure from "allure-js-commons";

Given(`User {string} navigate to {string} in shop store`, (userName, menu) => {
  allure.tag("HU02");
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

When(`User type mail {string} and Password {string}`, (mail, pwd) => {
  allure.tag("HU02");
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
  allure.tag("HU02");
  allure.tag("Login");
  allure.epic("Login");
  allure.feature("User Login");
  allure.story("User Login");

  allure.step(`Click en submmit button`, () => {
    cy.submitLogin();
  });
});

Then("User see the text {string} together with the username", (string) => {
  allure.tag("HU02");
  allure.tag("Login");
  allure.epic("Login");
  allure.feature("User Login");
  allure.story("User Login");

  allure.step(`User see the text ${string} together with the username`, () => {
    cy.get("@username").then((userData) => {
      allure.step(
        `Check the text ${string} ${userData} is visible`,
        () => {
          cy.validLogin(string, userData);
        }
      );
    });
  });
});
