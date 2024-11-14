/// <reference types="cypress"/>
import { Given, When, Then, BeforeStep } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker/locale/es_MX";

const fname = faker.person.firstName();
const lname = faker.person.lastName();
const email = faker.internet.email({firstName : fname, lastName : lname});
const username = `${faker.internet.username({firstName : fname, lastName: lname})}${Math.round(
  Math.random() * 1000
)}`;
const title = faker.person.sex(); // male or female
const password = faker.internet.password();

const formatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const birthday = `${formatter.format(faker.date.birthdate({mode : "age", min : 18, max : 120}))}`;

const company = faker.company.name();

const address = faker.location.streetAddress();
const address2 = faker.location.streetAddress();

const state = faker.location.state();
const city = faker.location.city();
const zipCode = faker.location.zipCode();

const phoneNumber = faker.phone.number({style:"international"});



  Given(`User navigate to {string}`, (menu) => {
    cy.clearCookies();
    cy.visit("/");
    cy.searchMenu(menu);
  });
  
  When(`User ingress name and email and confirm`, () => {
    cy.ingressName(username).ingressEmail(email).submitSignUp();
  });

When(
  "User Fill details: Title, Name, Email, Password, Date of birth",
  function () {
    cy.selectTitle(title);
    cy.typePassword(password);
    cy.selectDateBirthday(birthday);
  }
);

When(
  "User select checkbox: {string} and {string}",
  function (string, string2) {
    cy.optionalCheck(string,string2);
  }
);

When(
  "User Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number",
  function () {
    cy.fillName(fname,lname);
    cy.fillCompany(company);
    cy.fillAddress(address,address2);
    cy.fillLocation(state,city,zipCode);
    cy.fillPhoneNumber(phoneNumber);
  }
);

When("Click {string}", function (string) {
  cy.sendRegister(string);
});

Then(`Access successfully at {string}`, (title) => {
  cy.validTitleSignup(title);
});

Then(`Username and email are preloaded`, () => {
  cy.preloadedInputs(username, email);
});

Then(
  "The new user is created successfuly with de legend {string}",
  function (string) {
    cy.validTitleRegisterSuccessfully(string);
  }
);

Then(
  "User see the text {string} together with the username",
  function (string) {
    cy.validLogin(string, username);
    cy.searchMenu(' Delete Account'); // Se borra el usuario recién creado
    cy.validTitleDeleteSuccessfully('Account Deleted!'); // Validación de título de eliminación exitosa
  }
);
