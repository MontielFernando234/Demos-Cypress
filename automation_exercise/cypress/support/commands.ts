/// <reference types="cypress" />
import HomePage from "./pom/homePage/HomePage";
import LoginPage from "./pom/loginPage/LoginPage";
import NewRegisterPage from "./pom/loginPage/NewRegisterPage";
import AccountCreatePage from "./pom/accountCreatePage/AccountCreatePage";
import ProductPage from "./pom/productPage/ProductPage";

//Navegación menú
/**
 * @param menu: Nombre del menú tal como aparece en el código html
 */
Cypress.Commands.add("navigateTo", (menu) => {
  cy.get(HomePage.Menu).each((el, index, $list) => {
    let listMenuItem = $list[index];
    cy.wrap(listMenuItem).as("menuItem");

    listMenuItem.textContent.includes(menu)
      ? cy.get("@menuItem").click({ force: true })
      : cy.log(`---- Nombre menú ${$list[index].textContent} --------`);
  });
});

//----------------------------------------------------Comandos Login Page--------------------------------------------------------------------------------//

/**
 * @param username: agregar nombre de usuario
 */
Cypress.Commands.add("ingressName", (username) => {
  cy.get(LoginPage.SignupName).type(username).wait(1500);
});

/**
 * @param anterior: elemento anterior (no se carga este valor al invocarlo ya que es el valor del método padre)
 * @param mail: correo
 */
Cypress.Commands.add(
  "ingressEmail",
  { prevSubject: true },
  (anterior, mail) => {
    cy.get(LoginPage.SignupMail).type(mail).wait(1500);
  }
);

Cypress.Commands.add("ingressLoginEmail", (mail) => {
  cy.get(LoginPage.LoginMail).type(mail).wait(1500);
});

Cypress.Commands.add(
  "ingressLoginPassword",
  { prevSubject: true },
  (anterior, pwd) => {
    cy.get(LoginPage.LoginPassword).type(pwd).wait(1500);
  }
);

/**
 * Envío de datos básicos para la generación de un nuevo usuario
 */
Cypress.Commands.add("submitSignUp", { prevSubject: true }, () => {
  cy.get(LoginPage.SignupSubmit).click({ force: true });
});

Cypress.Commands.add("submitLogin", () => {
  cy.get(LoginPage.LoginSubmit).click({ force: true });
});

//----------------------------------------------------Comandos Signup page--------------------------------------------------------------------------------//

/**
 * @param title: cargar el nombre del título de la página Signup
 */
Cypress.Commands.add("validTitleSignup", (title) => {
  cy.get(NewRegisterPage.TITLE).should("have.text", title, "mensaje");
});

/**
 * @param username: nombre de usuario
 * @param email: correo electrónico con formato example@info.com
 */
Cypress.Commands.add("preloadedInputs", (username, email) => {
  cy.get(NewRegisterPage.INPUT_NAME).should("have.value", username);
  cy.get(NewRegisterPage.EMAIL).should("have.value", email);
});

/**
 * @param title: género (male or female)
 */
Cypress.Commands.add("selectTitle", (title) => {
  title === "male"
    ? cy.get(NewRegisterPage.GENDER_MR).check({ force: true })
    : cy.get(NewRegisterPage.GENDER_MRS).check({ force: true });
});

/**
 * @param password: contraseña
 */
Cypress.Commands.add("typePassword", (password) => {
  cy.get(NewRegisterPage.PASSWORD).type(password);
});

/**
 * @param birthday: fecha de nacimiento en formato dd month yyyy
 */
Cypress.Commands.add("selectDateBirthday", (birthday) => {
  const date = birthday.split(" ");
  cy.get(NewRegisterPage.DAYS).select(date[0]);
  cy.get(NewRegisterPage.MONTHS).select(date[1]);
  cy.get(NewRegisterPage.YEARS).select(date[2]);
});

Cypress.Commands.add("optionalCheck", (chknl, chkopt) => {
  cy.get(NewRegisterPage.LABEL_CHECK_NEWSLETTER)
    .should("have.text", chknl)
    .click({ force: true });
  cy.get(NewRegisterPage.CHK_NL).should("be.checked");

  cy.get(NewRegisterPage.LABEL_CHECK_SPECIAL_OFFERS)
    .should("have.text", chkopt)
    .click({ force: true });
  cy.get(NewRegisterPage.CHK_OP).should("be.checked");
});

Cypress.Commands.add("fillName", (fn, ln) => {
  cy.get(NewRegisterPage.FIRST_NAME).type(fn);
  cy.get(NewRegisterPage.LAST_NAME).type(ln);
});

Cypress.Commands.add("fillCompany", (company) => {
  cy.get(NewRegisterPage.COMPANY).type(company);
});

Cypress.Commands.add("fillAddress", (add1, add2) => {
  cy.get(NewRegisterPage.ADDRESS_1).type(add1);
  cy.get(NewRegisterPage.ADDRESS_2).type(add2);
});

Cypress.Commands.add("fillLocation", (st, c, zc) => {
  cy.get(NewRegisterPage.STATE).type(st);
  cy.get(NewRegisterPage.CITY).type(c);
  cy.get(NewRegisterPage.ZIP_CODE).type(zc);
});

Cypress.Commands.add("fillPhoneNumber", (pn) => {
  cy.get(NewRegisterPage.MOBILE_NUMBER).type(pn);
});

Cypress.Commands.add("sendRegister", (nameButton) => {
  cy.get(NewRegisterPage.BUTTON_CREATE_ACCOUNT)
    .should("have.text", nameButton)
    .click({ force: true });
});

Cypress.Commands.add("validTitleRegisterSuccessfully", (msg) => {
  cy.get(AccountCreatePage.TITLE).should("have.text", msg);
});

Cypress.Commands.add("validLogin", () => {
  cy.contains("a", `Logout`).should("not.exist");
  cy.contains("a", `Delete Account`).should("not.exist");
  cy.contains("a", "Logged in as").should("not.exist");
});

Cypress.Commands.add(`confirmAccountCreated`, () => {
  cy.get(AccountCreatePage.BTN_CONTINUE).click({ force: true });
});

Cypress.Commands.overwrite(
  "validLogin",
  (originalFn, txt = null, username = null) => {
    if (txt != null && username != null) {
      let flag = false;
      cy.get(HomePage.Menu)
        .each((el, index, $list) => {
          if ($list[index].textContent.includes(`${txt}${username}`)) {
            flag = true;
          }
        })
        .then(() => {
          expect(flag).to.be.true;
        });
    } else {
      originalFn();
    }
  }
);

Cypress.Commands.add("validTitleDeleteSuccessfully", (msg) => {
  cy.get(AccountCreatePage.TITLE_DELETE).should("have.text", msg);
});

//----------------------------------------------------Comandos Signup page--------------------------------------------------------------------------------//

Cypress.Commands.add("addProduct", (itemProduct) => {
  cy.get(ProductPage.ImageCard)
    .eq(itemProduct - 1)
    .realHover();

  cy.get(
    ProductPage.addToCartButtonOverlay.replace("productID", `${itemProduct}`)
  ).click({ force: true });
});

Cypress.Commands.add('continueShopping',(buttonName : string)=>{
  cy.get(ProductPage.buttonContinueToShopping).click({force:true});
})

Cypress.Commands.add("viewCartFromModalProductAdded", (linkName: string) => {
  cy.get(ProductPage.linkViewCart).click({ force: true });
});
