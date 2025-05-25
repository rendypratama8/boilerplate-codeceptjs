const { I, loginPage } = inject();

// Define your locators here //
const text = {
  title: "",
};

const input = {
  name: "",
};

const button = {
  logout: "//button[@id='logout']",
};

const message = {
  success: {
    message: "",
  },
  failed: {
    message: "",
  },
};

export = {
  // LOCATORS //
  loc: {
    text,
    input,
    button,
    message,
  },

  // METHODS //
  DoLogout() {
    I.waitForElement(button.logout, 5);
    I.click(button.logout);
    I.waitForInvisible(button.logout, 5);
  },

  VerifyLogoutSuccess() {
    I.waitForElement(loginPage.loc.text.title, 5);
    I.waitForElement(loginPage.loc.input.email, 5);
    I.waitForElement(loginPage.loc.input.password, 5);
  },
};
