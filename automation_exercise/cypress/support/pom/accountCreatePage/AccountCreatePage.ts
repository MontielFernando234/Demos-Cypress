class AccountCreatePage {
  private elements: {
    title: "h2[data-qa='account-created']";
    titleDelete: "h2[data-qa='account-deleted']";
    btnContinue: "a[data-qa='continue-button']";
    textCongrats: "div.col-sm-9 > p";
  };
}

export default new AccountCreatePage();
