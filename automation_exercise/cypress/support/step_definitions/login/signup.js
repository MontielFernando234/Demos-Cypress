/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const DataGenerator = require("../../lib/DataGenerator");

function createDataUser() {
  const userData = DataGenerator.generateUserData();
  cy.wrap(userData).as("newUser");
}

function createDataAddress() {
  const userAddress = DataGenerator.generateAddress();
  cy.wrap(userAddress).as("newAddress");
}

Given(`User navigate to {string}`, (menu) => {
  cy.clearCookies();
  cy.visit("/");
  cy.navigateTo(menu);
});

When(`User ingress name and email and confirm`, () => {
  createDataUser();

  cy.get("@newUser").then((userData) => {
    cy.ingressName(userData.username)
      .ingressEmail(userData.email)
      .submitSignUp();
  });
});

When("User Fill details: Title, Name, Email, Password, Date of birth", () => {
  cy.get("@newUser").then((userData) => {
    cy.selectTitle(userData.title);
    cy.typePassword(userData.password);
    cy.selectDateBirthday(userData.birthday);
  });
});

When("User select checkbox: {string} and {string}", function (string, string2) {
  cy.optionalCheck(string, string2);
});

When(
  "User Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number",
  () => {
    createDataAddress();

    cy.get("@newUser").then((userData) => {
      cy.fillName(userData.fname, userData.lname);
    });
    cy.get("@newAddress").then((userAddress) => {
      cy.fillCompany(userAddress.company);
      cy.fillAddress(userAddress.address, userAddress.address2);
      cy.fillLocation(userAddress.state, userAddress.city, userAddress.zipCode);
    });
    cy.get("@newUser").then((userData) => {
      cy.fillPhoneNumber(userData.phoneNumber);
    });
  }
);

When("Click {string}", function (string) {
  cy.sendRegister(string);
});

Then(`Access successfully at {string}`, (title) => {
  cy.validTitleSignup(title);
});

Then(`Username and email are preloaded`, () => {
  cy.get("@newUser").then((userData) => {
    cy.preloadedInputs(userData.username, userData.email);
  });
});

Then(
  "The new user is created successfuly with de legend {string}",
  (string) => {
    cy.validTitleRegisterSuccessfully(string);
  }
);

Then("User see the text {string} together with the username", (string) => {
  cy.get("@newUser").then((userData) => {
    cy.validLogin(string, userData.username);
  });
  cy.navigateTo(" Delete Account");
  cy.validTitleDeleteSuccessfully("Account Deleted!");
  cy.validLogin();
});
