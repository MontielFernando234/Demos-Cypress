/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const DataGenerator = require("../../lib/DataGenerator");
import * as allure from "allure-js-commons";

function createDataUser() {
  const userData = DataGenerator.generateUserData();
  cy.wrap(userData).as("newUser");
}

function createDataAddress() {
  const userAddress = DataGenerator.generateAddress();
  cy.wrap(userAddress).as("newAddress");
}

Given(`User navigate to {string}`, (menu) => {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");
  
  allure.step(`User navigate to ${menu}`, () => {
    cy.clearCookies();
    cy.visit("/");
    cy.navigateTo(menu);
  });

});

When(`User ingress name and email and confirm`, () => {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  createDataUser();

  allure.step("User ingress name and email and confirm", () => {
    cy.get("@newUser").then((userData) => {
      allure.step(
        `User input username ${userData.username} and email ${userData.email}`,
        () => {
          cy.ingressName(userData.username)
            .ingressEmail(userData.email)
            .submitSignUp();
        }
      );
    });
  });
});

When("User Fill details: Title, Name, Email, Password, Date of birth", () => {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  allure.step(
    "User Fill details: Title, Name, Email, Password, Date of birth",
    () => {
      cy.get("@newUser").then((userData) => {
        allure.step(
          `User select title ${userData.title}, input ${userData.password} and select birthday ${userData.birthday}`,
          () => {
            cy.selectTitle(userData.title);
            cy.typePassword(userData.password);
            cy.selectDateBirthday(userData.birthday);
          }
        );
      });
    }
  );
});

When("User select checkbox: {string} and {string}", function (string, string2) {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  allure.step(`User select checkbox: ${string} and ${string2}`, () => {
    cy.optionalCheck(string, string2);
  });
});

When(
  "User Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number",
  () => {
    allure.tag("HU01");
    allure.tag("Signup");
    allure.epic("Login");
    allure.feature("Creation of new clients");
    allure.story("Create User");

    createDataAddress();

    allure.step(
      "User Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number",
      () => {
        cy.get("@newUser").then((userData) => {
          allure.step(
            `User fill first name ${userData.fname} and last name ${userData.lname}`,
            () => {
              cy.fillName(userData.fname, userData.lname);
            }
          );
        });

        cy.get("@newAddress").then((userAddress) => {
          allure.step(
            `User fill company ${userAddress.company} ,address ${userAddress.address} , address2 ${userAddress.address2}, state ${userAddress.state}, city ${userAddress.city} and zip code ${userAddress.zipCode}`,
            () => {
              cy.fillCompany(userAddress.company);
              cy.fillAddress(userAddress.address, userAddress.address2);
              cy.fillLocation(
                userAddress.state,
                userAddress.city,
                userAddress.zipCode
              );
            }
          );
        });

        cy.get("@newUser").then((userData) => {
          allure.step(`User fill phone number ${userData.phoneNumber}`, () => {
            cy.fillPhoneNumber(userData.phoneNumber);
          });
        });
      }
    );
  }
);

When("Click {string}", function (string) {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  allure.step(`Click ${string}`, () => {
    cy.sendRegister(string);
  });
});

Then(`Access successfully at {string}`, (title) => {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  allure.step(`Access successfully at ${title}`, () => {
    cy.validTitleSignup(title);
  });
});

Then(`Username and email are preloaded`, () => {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  allure.step(`Username and email are preloaded`, () => {
    cy.get("@newUser").then((userData) => {
      allure.step(
        `Check username ${userData.username} and email ${userData.email} preloaded`,
        () => {
          cy.preloadedInputs(userData.username, userData.email);
        }
      );
    });
  });
});

Then(
  "The new user is created successfuly with de legend {string}",
  (string) => {
    allure.tag("HU01");
    allure.tag("Signup");
    allure.epic("Login");
    allure.feature("Creation of new clients");
    allure.story("Create User");

    allure.step(
      `The new user is created successfuly with de legend ${string}`,
      () => {
        cy.validTitleRegisterSuccessfully(string);
      }
    );
  }
);

Then("User see the text {string} together with the username and delete it", (string) => {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  allure.step(`User see the text ${string} together with the username`, () => {
    cy.get("@newUser").then((userData) => {
      allure.step(
        `Check the text ${string} ${userData.username} is visible`,
        () => {
          cy.confirmAccountCreated();
          cy.validLogin(string, userData.username);
        }
      );
    });

    allure.step(`User performed click to Delete Account`, () => {
      cy.navigateTo(" Delete Account");
    });

    allure.step(`Check title Account Deleted! is visible`, () => {
      cy.validTitleDeleteSuccessfully("Account Deleted!");
    });

    allure.step(`Check username information is not visible`, () => {
      cy.validLogin();
    });
  });
});
