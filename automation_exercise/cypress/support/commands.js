/// <reference types="cypress" />

//Navegación menú
/**
 * @param menu: Nombre del menú tal como aparece en el código html
 */
Cypress.Commands.add("searchMenu", (menu) => {
  cy.fixture("locators/homepage/homepage").then((x) => {
    cy.get(x.menu).each((el, index, $list) => {
      $list[index].textContent.includes(menu)
        ? cy.get($list[index]).click({ timeout: 2000 }, { force: true })
        : cy.log(`nombre menú ${menu}`);
    });
  });
});

//Comandos Login Page
/**
 * @param username: agregar nombre de usuario
 */
Cypress.Commands.add("ingressName", (username) => {
  cy.fixture("locators/loginpage/loginpage").then((val) => {
    cy.get(val.signupName).type(username).wait(1500);
  });
});

/**
 * @param anterior: elemento anterior (no se carga este valor al invocarlo ya que es el valor del método padre)
 * @param mail: correo
 */
Cypress.Commands.add(
  "ingressEmail",
  { prevSubject: true },
  (anterior, mail) => {
    cy.fixture("locators/loginpage/loginpage").then((val) => {
      cy.get(val.signupMail).type(mail).wait(1500);
    });
  }
);

/**
 * Envío de datos básicos para la generación de un nuevo usuario
 */
Cypress.Commands.add("submitSignUp", { prevSubject: true }, () => {
  cy.fixture("locators/loginpage/loginpage").then((val) => {
    cy.get(val.signupSubmit).click({ timeout: 2000 }, { force: true });
  });
});

//Comandos Signup page
Cypress.Commands.add("validTitleSignup", (title) => {
  cy.fixture("locators/loginpage/newregisterpage").then((val) => {
    cy.get(val.title).should("have.text", title, "mensaje");
  });
});

Cypress.Commands.add("preloadedInputs", (username, email) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.inputName).should("have.value", username);
    cy.get(x.email).should("have.value", email);
  });
});
