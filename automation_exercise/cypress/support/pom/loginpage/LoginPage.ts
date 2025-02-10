class LoginPage {
  private element: {
    signupTitle: "div.signup-form > h2";
    signupName: "input[data-qa='signup-name']";
    loginMail: "input[data-qa='login-email']";
    signupMail: "input[data-qa='signup-email']";
    loginPwd: "input[data-qa='login-password']";
    loginSubmit: "button[data-qa='login-button']";
    signupSubmit: "button[data-qa='signup-button']";
  };
}

export default new LoginPage();