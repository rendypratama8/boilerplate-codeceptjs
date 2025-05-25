const { I, loginPage } = inject();

Given(/^I am on the login page$/, () => {
  loginPage.OpenLoginPage();
});

When(/^I enter my valid credentials$/, () => {
  loginPage.DoLogin();
});

When(
  /^I enter my credentials with invalid (.*)$/,
  (negativeScenario: string) => {
    switch (negativeScenario) {
      case "email":
        loginPage.DoLogin("invalidEmail@gmail.com");
        break;
      case "password":
        loginPage.DoLogin("", "invalidPassword");
        break;
      case "email, password":
        loginPage.DoLogin("invalidEmail@gmail.com", "invalidPassword");
        break;
    }
  }
);

When(/^I click the login button$/, () => {
  I.click(loginPage.loc.button.login);
});

Then(/^I should be taken to the contact list page$/, () => {
  loginPage.VerifyLoginSuccess();
});

Then(/^I should be seen the error message of invalid credentials$/, () => {
  loginPage.VerifyLoginFailed();
});
