class LoginPage {
  private element: {
    SIGNUP_TITLE: string;
    SIGNUP_NAME: string;
    LOGIN_MAIL: string;
    SIGNUP_MAIL: string;
    LOGIN_PASSWORD: string;
    LOGIN_SUBMIT: string;
    SIGNUP_SUBMIT: string;
  };
  
  constructor() {
    this.element = {
      SIGNUP_TITLE: "div.signup-form > h2",
      SIGNUP_NAME: "input[data-qa='signup-name']",
      LOGIN_MAIL: "input[data-qa='login-email']",
      SIGNUP_MAIL: "input[data-qa='signup-email']",
      LOGIN_PASSWORD: "input[data-qa='login-password']",
      LOGIN_SUBMIT: "button[data-qa='login-button']",
      SIGNUP_SUBMIT: "button[data-qa='signup-button']"
    };
  }

  get SignupTitle() : string{
    return this.element.SIGNUP_TITLE;
  }

  get SignupName() : string{
    return this.element.SIGNUP_NAME;
  }

  get LoginMail() : string{
    return this.element.LOGIN_MAIL;
  }

  get SignupMail() : string{
    return this.element.SIGNUP_MAIL;
  }

  get LoginPassword() : string{
    return this.element.LOGIN_PASSWORD;
  }

  get LoginSubmit() : string{
    return this.element.LOGIN_SUBMIT;
  }

  get SignupSubmit() : string{
    return this.element.SIGNUP_SUBMIT;
  }
}

export default new LoginPage();