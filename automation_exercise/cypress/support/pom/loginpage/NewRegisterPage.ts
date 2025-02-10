class NewRegisterPage {
  private elements: {
    TITLE: string;
    GENDER_MR: string;
    GENDER_MRS: string;
    INPUT_NAME: string;
    EMAIL: string;
    PASSWORD: string;
    DAYS: string;
    MONTHS: string;
    YEARS: string;
    LABEL_CHECK_NEWSLETTER: string;
    CHK_NL: string;
    LABEL_CHECK_SPECIAL_OFFERS: string;
    CHK_OP: string;
    FIRST_NAME: string;
    LAST_NAME: string;
    COMPANY: string;
    ADDRESS_1: string;
    ADDRESS_2: string;
    COUNTRY: string;
    STATE: string;
    CITY: string;
    ZIP_CODE: string;
    MOBILE_NUMBER: string;
    BUTTON_CREATE_ACCOUNT: string;
  };
  
  constructor() {
    this.elements = {
      TITLE: "div.login-form > h2",
      GENDER_MR: "#id_gender1",
      GENDER_MRS: "#id_gender2",
      INPUT_NAME: "#name",
      EMAIL: "#email",
      PASSWORD: "#password",
      DAYS: "#days",
      MONTHS: "#months",
      YEARS: "#years",
      LABEL_CHECK_NEWSLETTER: "label[for=newsletter]",
      CHK_NL: "#newsletter",
      LABEL_CHECK_SPECIAL_OFFERS: "label[for=optin]",
      CHK_OP: "#optin",
      FIRST_NAME: "#first_name",
      LAST_NAME: "#last_name",
      COMPANY: "#company",
      ADDRESS_1: "#address1",
      ADDRESS_2: "#address2",
      COUNTRY: "#country",
      STATE: "#state",
      CITY: "#city",
      ZIP_CODE: "#zipcode",
      MOBILE_NUMBER: "#mobile_number",
      BUTTON_CREATE_ACCOUNT: "button[data-qa='create-account']",
    };
  }

  get TITLE(): string {
    return this.elements.TITLE;
  }
  get GENDER_MR(): string {
    return this.elements.GENDER_MR;
  }
  get GENDER_MRS(): string {
    return this.elements.GENDER_MRS;
  }
  get INPUT_NAME(): string {
    return this.elements.INPUT_NAME;
  }
  get EMAIL(): string {
    return this.elements.EMAIL;
  }
  get PASSWORD(): string {
    return this.elements.PASSWORD;
  }
  get DAYS(): string {
    return this.elements.DAYS;
  }
  get MONTHS(): string {
    return this.elements.MONTHS;
  }
  get YEARS(): string {
    return this.elements.YEARS;
  }
  get LABEL_CHECK_NEWSLETTER(): string {
    return this.elements.LABEL_CHECK_NEWSLETTER;
  }
  get CHK_NL(): string {
    return this.elements.CHK_NL;
  }
  get LABEL_CHECK_SPECIAL_OFFERS(): string {
    return this.elements.LABEL_CHECK_SPECIAL_OFFERS;
  }
  get CHK_OP(): string {
    return this.elements.CHK_OP;
  }
  get FIRST_NAME(): string {
    return this.elements.FIRST_NAME;
  }
  get LAST_NAME(): string {
    return this.elements.LAST_NAME;
  }
  get COMPANY(): string {
    return this.elements.COMPANY;
  }
  get ADDRESS_1(): string {
    return this.elements.ADDRESS_1;
  }
  get ADDRESS_2(): string {
    return this.elements.ADDRESS_2;
  }
  get COUNTRY(): string {
    return this.elements.COUNTRY;
  }
  get STATE(): string {
    return this.elements.STATE;
  }
  get CITY(): string {
    return this.elements.CITY;
  }
  get ZIP_CODE(): string {
    return this.elements.ZIP_CODE;
  }
  get MOBILE_NUMBER(): string {
    return this.elements.MOBILE_NUMBER;
  }
  get BUTTON_CREATE_ACCOUNT(): string {
    return this.elements.BUTTON_CREATE_ACCOUNT;
  }
}

export default new NewRegisterPage();
