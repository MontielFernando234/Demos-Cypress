/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { UserData, AddressData } from '../../lib/DataGenerator';
import DataGenerator from "../../lib/DataGenerator";
import * as allure from "allure-js-commons";

function createDataUser() {
  const userData : UserData = DataGenerator.generateUserData();
  cy.wrap(userData).as("newUser");
}

function createDataAddress() {
  const userAddress : AddressData = DataGenerator.generateAddress();
  cy.wrap(userAddress).as("newAddress");
}

Given(`User navigate to {string}`, (menu : string) => {
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
      const user = userData as unknown as UserData;
      allure.step(
        `User input username ${user.username} and email ${user.email}`,
        () => {
          cy.ingressName(user.username)
            .ingressEmail(user.email)
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
        const user = userData as unknown as UserData;
        allure.step(
          `User select title ${user.title}, input ${user.password} and select birthday ${user.birthday}`,
          () => {
            cy.selectTitle(user.title);
            cy.typePassword(user.password);
            cy.selectDateBirthday(user.birthday);
          }
        );
      });
    }
  );
});

When("User select checkbox: {string} and {string}", function (string : string, string2 : string) {
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
          const user = userData as unknown as UserData;
          allure.step(
            `User fill first name ${user.fname} and last name ${user.lname}`,
            () => {
              cy.fillName(user.fname, user.lname);
            }
          );
        });

        cy.get("@newAddress").then((userAddress) => {
          const address = userAddress as unknown as AddressData;
          allure.step(
            `User fill company ${address.company} ,address ${address.address} , address2 ${address.address2}, state ${address.state}, city ${address.city} and zip code ${address.zipCode}`,
            () => {
              cy.fillCompany(address.company);
              cy.fillAddress(address.address, address.address2);
              cy.fillLocation(
                address.state,
                address.city,
                address.zipCode
              );
            }
          );
        });

        cy.get("@newUser").then((userData) => {
          const user = userData as unknown as UserData;
          allure.step(`User fill phone number ${user.phoneNumber}`, () => {
            cy.fillPhoneNumber(user.phoneNumber);
          });
        });
      }
    );
  }
);

When("Click {string}", function (string : string) {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  allure.step(`Click ${string}`, () => {
    cy.sendRegister(string);
  });
});

Then(`Access successfully at {string}`, (title : string) => {
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
      const user = userData as unknown as UserData;
      allure.step(
        `Check username ${user.username} and email ${user.email} preloaded`,
        () => {
          cy.preloadedInputs(user.username, user.email);
        }
      );
    });
  });
});

Then(
  "The new user is created successfuly with de legend {string}",
  (string : string) => {
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

Then("User see the text {string} together with the username and delete it", (string : string) => {
  allure.tag("HU01");
  allure.tag("Signup");
  allure.epic("Login");
  allure.feature("Creation of new clients");
  allure.story("Create User");

  allure.step(`User see the text ${string} together with the username`, () => {
    cy.get("@newUser").then((userData) => {
      const user = userData as unknown as UserData;
      allure.step(
        `Check the text ${string} ${user.username} is visible`,
        () => {
          cy.confirmAccountCreated();
          cy.validLogin(string, user.username);
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
