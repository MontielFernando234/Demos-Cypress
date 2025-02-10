class AccountCreatePage {
  private elements: {
    TITLE: string;
    TITLE_DELETE: string;
    BTN_CONTINUE: string;
    TEXT_CONGRATS: string;
  };

  constructor() {
    this.elements = {
      TITLE: "h2[data-qa='account-created']",
      TITLE_DELETE: "h2[data-qa='account-deleted']",
      BTN_CONTINUE: "a[data-qa='continue-button']",
      TEXT_CONGRATS: "div.col-sm-9 > p",
    };
  }

  get TITLE(): string {
    return this.elements.TITLE;
  }
  get TITLE_DELETE(): string {
    return this.elements.TITLE_DELETE;
  }
  get BTN_CONTINUE(): string {
    return this.elements.BTN_CONTINUE;
  }
  get TEXT_CONGRATS(): string {
    return this.elements.TEXT_CONGRATS;
  }
}

export default new AccountCreatePage();
