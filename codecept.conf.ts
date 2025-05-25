require("dotenv").config();
const { setHeadlessWhen } = require("@codeceptjs/configure");

setHeadlessWhen(process.env.HEADLESS);

export const config: CodeceptJS.MainConfig = {
  name: "boilerplate-codeceptjs",
  tests: "./tests/**/**/*_test.ts",
  output: "./output",
  gherkin: {
    features: "./tests/web/features/**/*.feature",
    steps: "./tests/web/step_definitions/**/*.ts",
  },
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://thinking-tester-contact-list.herokuapp.com",
      show: true,
      waitForNavigation: "load",
    },
  },
  include: {
    I: "./steps_file",
    loginPage: "./pages/web/auth/Login.ts",
    logoutPage: "./pages/web/auth/Logout.ts",
    signUpPage: "./pages/web/auth/SignUp.ts",
    contactListPage: "./pages/web/contact/ContactList.ts",
    contactAddPage: "./pages/web/contact/ContactAdd.ts",
  },
};
