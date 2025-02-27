/// <reference types="cypress" />
import HomePage from "./pom/homePage/HomePage";
import LoginPage from "./pom/loginPage/LoginPage";
import NewRegisterPage from "./pom/loginPage/NewRegisterPage";
import AccountCreatePage from "./pom/accountCreatePage/AccountCreatePage";
import ProductPage from "./pom/productPage/ProductPage";
import CartPage from "./pom/cartpage/CartPage";
import PaymentPage from "./pom/paymentPage/PaymentPage";
import Cart from "./lib/SingletonCart";
import CheckoutPage from "./pom/checkoutPage/CheckoutPage";

//-------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------Comandos HomePage----------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------//
Cypress.Commands.add("navigateTo", (menu) => {
  cy.get(HomePage.Menu).each((el, index, $list) => {
    let listMenuItem = $list[index];
    cy.wrap(listMenuItem).as("menuItem");

    listMenuItem.textContent.includes(menu)
      ? cy.get("@menuItem").click({ force: true })
      : cy.log(`---- Nombre menú ${$list[index].textContent} --------`);
  });
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------Comandos Login Page--------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------//

Cypress.Commands.add("ingressName", (username) => {
  cy.get(LoginPage.SignupName).type(username).wait(1500);
});

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

Cypress.Commands.add("submitSignUp", { prevSubject: true }, () => {
  cy.get(LoginPage.SignupSubmit).click({ force: true });
});

Cypress.Commands.add("submitLogin", () => {
  cy.get(LoginPage.LoginSubmit).click({ force: true });
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------Comandos Signup page--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------//

Cypress.Commands.add("validTitleSignup", (title) => {
  cy.get(NewRegisterPage.TITLE).should("have.text", title, "mensaje");
});

Cypress.Commands.add("preloadedInputs", (username, email) => {
  cy.get(NewRegisterPage.INPUT_NAME).should("have.value", username);
  cy.get(NewRegisterPage.EMAIL).should("have.value", email);
});

Cypress.Commands.add("selectTitle", (title) => {
  title === "male"
    ? cy.get(NewRegisterPage.GENDER_MR).check({ force: true })
    : cy.get(NewRegisterPage.GENDER_MRS).check({ force: true });
});

Cypress.Commands.add("typePassword", (password) => {
  cy.get(NewRegisterPage.PASSWORD).type(password);
});

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

//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------Comandos Cart page--------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------//

Cypress.Commands.add(
  "addProduct",
  (buttonName: string, cart: Cart, itemProduct: number, quantity: number) => {
    cy.get(ProductPage.ImageCard)
      .eq(itemProduct - 1)
      .realHover();

    cy.get(
      ProductPage.addToCartButtonOverlay.replace("productID", `${itemProduct}`)
    )
      .should("have.text", buttonName)
      .then((button) => {
        cy.wrap(button)
          .parent("div.overlay-content")
          .children("p")
          .invoke("text")
          .then((pName) => {
            cy.wrap(button)
              .parent("div.overlay-content")
              .children("h2")
              .invoke("text")
              .then((pPrice) => {
                cart.addProduct({
                  name: `${pName}`,
                  price: parseFloat(`${pPrice}`.replace("Rs. ", "")),
                  quantity: quantity,
                });
              });
          });

        cy.wrap(button).click({ force: true });
      });
  }
);

Cypress.Commands.add("continueShopping", (buttonName: string) => {
  cy.get(ProductPage.buttonContinueToShopping).click({ force: true });
});

Cypress.Commands.add("viewCartFromModalProductAdded", (linkName: string) => {
  cy.get(ProductPage.linkViewCart).click({ force: true });
});

Cypress.Commands.add("validateProductsInCart", (products: Cart) => {
  cy.get(CartPage.bodyCart).should(
    "have.length",
    products.getProducts().length
  );

  products.getProducts().forEach((product, index) => {
    cy.get(
      CartPage.cartItemDescription.replace("index", `${index + 1}`)
    ).should("contain", product.name);
  });
});

Cypress.Commands.add("validateQuantityAndTotalPrice", (products: Cart) => {
  let totalPrice = 0;
  products.getProducts().forEach((product, index) => {
    cy.get(CartPage.cartItemPrice.replace("index", `${index + 1}`)).should(
      "contain",
      product.price
    );
    cy.get(CartPage.cartItemQuantity.replace("index", `${index + 1}`)).should(
      "contain",
      product.quantity
    );
    totalPrice = product.price * product.quantity;
    cy.get(CartPage.cartItemTotal.replace("index", `${index + 1}`)).should(
      "contain",
      totalPrice
    );
  });
});

Cypress.Commands.add("proceedToCheckout", (buttonName: string) => {
  cy.get(CartPage.buttonCheckout)
    .should("have.text", buttonName)
    .click({ force: true });
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------Comandos Payment page--------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------//

Cypress.Commands.add("goToPaymentData", (buttonName: string) => {
  cy.get(CheckoutPage.buttonPlaceOrder)
    .should("have.text", buttonName)
    .click({ force: true });
});

Cypress.Commands.add(
  "fillCardData",
  (
    nameCard: string,
    numberCard: string,
    cvc: string,
    monthExp: string,
    yearExp: string
  ) => {
    cy.get(PaymentPage.inputNameOnCard).type(nameCard);
    cy.get(PaymentPage.inputCardNumber).type(numberCard);
    cy.get(PaymentPage.inputCvc).type(cvc);
    cy.get(PaymentPage.inputExpirationMonth).type(monthExp);
    cy.get(PaymentPage.inputExpirationYear).type(yearExp);
  }
);

Cypress.Commands.add("confirmOrder", (buttonName: string) => {
  cy.get(PaymentPage.buttonPayNow)
    .should("have.text", buttonName)
    .click({ force: true });
});

Cypress.Commands.add("validatePaymentSuccess", (title: string, message: string) => {
  cy.get(PaymentPage.titlePaymentDone).should("have.text", title);
  cy.get(PaymentPage.messagePaymentDone).should("have.text", message);
});