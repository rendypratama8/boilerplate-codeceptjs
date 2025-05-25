const { I, contactListPage } = inject();

const text = {
  page: "Contact List App",
  title: "//h1[normalize-space()='Contact List App']",
  description:
    "//div[normalize-space()='Welcome! This application is for testing purposes only. The database will be purged as needed to keep costs down.']",
  login: "//p[normalize-space()='Log In:']",
  signup: "//p[normalize-space()='Not yet a user? Click here to sign up!']",
  message: {
    invalidCredentials:
      "//span[normalize-space()='Incorrect username or password']",
  },
};

const input = {
  email: "//input[@id='email']",
  password: "//input[@id='password']",
};

const button = {
  login: "//button[@id='submit']",
  signup: "//button[@id='signup']",
};

export = {
  // LOCATORS //
  loc: {
    text,
    input,
    button,
  },

  // METHODS //
  OpenLoginPage() {
    I.amOnPage("");
    I.waitForElement(text.title, 5);
    I.seeInTitle(text.page);
    I.seeElement(text.title);
    I.seeElement(text.description);
    I.seeElement(text.login);
    I.seeElement(text.signup);
  },

  DoLogin(email?: string, password?: string) {
    if (!email) email = process.env.EMAIL;
    if (!password) password = process.env.PASS;

    I.fillField(input.email, email);
    I.fillField(input.password, password);
    I.click(button.login);
  },

  VerifyLoginSuccess() {
    I.waitForElement(contactListPage.loc.text.title, 5);
    I.seeElement(contactListPage.loc.text.description);
    I.seeInCurrentUrl("/contactList");
  },

  VerifyLoginFailed() {
    I.dontSeeElement(contactListPage.loc.text.title);
    I.waitForElement(text.message.invalidCredentials, 5);
  },
};
