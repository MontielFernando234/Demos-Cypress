/// <reference types="cypress" />

//Navegación menú
/**
 * @param menu: Nombre del menú tal como aparece en el código html
 */
Cypress.Commands.add("navigateTo", (menu) => {
  cy.fixture("locators/homepage/homepage").then((x) => {
    cy.get(x.menu).each((el, index, $list) => {
      $list[index].textContent.includes(menu)
        ? cy.get($list[index]).click({ timeout: 2000 }, { force: true })
        : cy.log(`---- Nombre menú ${$list[index].textContent} --------`);
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

Cypress.Commands.add("ingressLoginEmail", (mail) => {
  cy.fixture("locators/loginpage/loginpage").then((val) => {
    cy.get(val.loginMail).type(mail).wait(1500);
  });
});

Cypress.Commands.add(
  "ingressLoginPassword",
  { prevSubject: true },
  (anterior, pwd) => {
    cy.fixture("locators/loginpage/loginpage").then((val) => {
      cy.get(val.loginPwd).type(pwd).wait(1500);
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

Cypress.Commands.add("submitLogin", () => {
  cy.fixture("locators/loginpage/loginpage").then((val) => {
    cy.get(val.loginSubmit).click({ timeout: 2000 }, { force: true });
  });
});

//Comandos Signup page
/**
 * @param title: cargar el nombre del título de la página Signup
 */
Cypress.Commands.add("validTitleSignup", (title) => {
  cy.fixture("locators/loginpage/newregisterpage").then((val) => {
    cy.get(val.title).should("have.text", title, "mensaje");
  });
});

/**
 * @param username: nombre de usuario
 * @param email: correo electrónico con formato example@info.com
 */
Cypress.Commands.add("preloadedInputs", (username, email) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.inputName).should("have.value", username);
    cy.get(x.email).should("have.value", email);
  });
});

/**
 * @param title: género (male or female)
 */
Cypress.Commands.add("selectTitle", (title) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    title === "male"
      ? cy.get(x.genderMr).check({ force: true })
      : cy.get(x.genderMrs).check({ force: true });
  });
});

/**
 * @param password: contraseña
 */
Cypress.Commands.add("typePassword", (password) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.password).type(password);
  });
});

/**
 * @param birthday: fecha de nacimiento en formato dd month yyyy
 */
Cypress.Commands.add("selectDateBirthday", (birthday) => {
  const date = birthday.split(" ");

  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.days).select(date[0]);
    cy.get(x.months).select(date[1]);
    cy.get(x.years).select(date[2]);
  });
});

Cypress.Commands.add("optionalCheck", (chknl, chkopt) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.checkNewsletter).should("have.text", chknl).click({ force: true });
    cy.get(x.chkNl).should("be.checked");

    cy.get(x.checkSpecialOffers)
      .should("have.text", chkopt)
      .click({ force: true });
    cy.get(x.chkOp).should("be.checked");
  });
});

Cypress.Commands.add("fillName", (fn, ln) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.firstName).type(fn);
    cy.get(x.lastName).type(ln);
  });
});

Cypress.Commands.add("fillCompany", (company) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.company).type(company);
  });
});

Cypress.Commands.add("fillAddress", (add1, add2) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.address1).type(add1);
    cy.get(x.address2).type(add2);
  });
});

Cypress.Commands.add("fillLocation", (st, c, zc) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.state).type(st);
    cy.get(x.city).type(c);
    cy.get(x.zipCode).type(zc);
  });
});

Cypress.Commands.add("fillPhoneNumber", (pn) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.mobileNumber).type(pn);
  });
});

Cypress.Commands.add("sendRegister", (nameButton) => {
  cy.fixture("locators/loginpage/newregisterpage").then((x) => {
    cy.get(x.ButtonCreateAccount)
      .should("have.text", nameButton)
      .click({ force: true });
  });
});

Cypress.Commands.add("validTitleRegisterSuccessfully", (msg) => {
  cy.fixture("locators/accountCreatePage/accountCreatePage").then((x) => {
    cy.get(x.title).should("have.text", msg);
  });
});

Cypress.Commands.add("validLogin", () => {
  cy.contains("a", `Logout`).should("not.exist");
  cy.contains("a", `Delete Account`).should("not.exist");
  cy.contains("a", "Logged in as").should("not.exist");
});


Cypress.Commands.add(`confirmAccountCreated`,()=>{
  cy.fixture("locators/accountCreatePage/accountCreatePage").then((x) => {
    cy.get(x.btnContinue).click({ force: true });
  });
});


Cypress.Commands.overwrite(
  "validLogin",
  (originalFn, txt = null, username = null) => {
    if (txt != null && username != null) {
      cy.fixture("locators/homepage/homepage").then((x) => {
        let flag = false;
        cy.get(x.menu)
          .each((el, index, $list) => {
            if ($list[index].textContent.includes(`${txt}${username}`)) {
              flag = true;
            }
          })
          .then(() => {
            expect(flag).to.be.true;
          });
      });
    } else {
      originalFn();
    }
  }
);

Cypress.Commands.add("validTitleDeleteSuccessfully", (msg) => {
  cy.fixture("locators/accountCreatePage/accountCreatePage").then((x) => {
    cy.get(x.titleDelete).should("have.text", msg);
  });
});
