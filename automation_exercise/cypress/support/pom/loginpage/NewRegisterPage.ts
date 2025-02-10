class NewRegisterPage {
  private element: {
    title: "div.login-form > h2";
    genderMr: "#id_gender1";
    genderMrs: "#id_gender2";
    inputName: "#name";
    email: "#email";
    password: "#password";
    days: "#days";
    months: "#months";
    years: "#years";
    checkNewsletter: "label[for=newsletter]";
    chkNl: "#newsletter";
    checkSpecialOffers: "label[for=optin]";
    chkOp: "#optin";
    firstName: "#first_name";
    lastName: "#last_name";
    company: "#company";
    address1: "#address1";
    address2: "#address2";
    country: "#country";
    state: "#state";
    city: "#city";
    zipCode: "#zipcode";
    mobileNumber: "#mobile_number";
    ButtonCreateAccount: "button[data-qa='create-account']";
  };
}

export default new NewRegisterPage();
