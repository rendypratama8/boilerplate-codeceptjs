const { I, loginPage, logoutPage } = inject();

Given(/^I am on the contact list Page$/, () => {
  loginPage.OpenLoginPage();
  loginPage.DoLogin();
  loginPage.VerifyLoginSuccess();
});

When(/^I do logout$/, () => {
  logoutPage.DoLogout();
});

Then(/^I should be taken to the login page$/, () => {
  logoutPage.VerifyLogoutSuccess();
});
