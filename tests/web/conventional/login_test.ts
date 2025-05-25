Feature("Login");

const { I, loginPage } = inject();

Scenario("succeed to login with valid credential", ({ I }) => {
  loginPage.OpenLoginPage();
  loginPage.DoLogin();
  loginPage.VerifyLoginSuccess();
});

Scenario("fail to login with invalid email", ({ I }) => {
  loginPage.OpenLoginPage();
  loginPage.DoLogin("invalidEmail@gmail.com");
  loginPage.VerifyLoginFailed();
});

Scenario("fail to login with invalid password", ({ I }) => {
  loginPage.OpenLoginPage();
  loginPage.DoLogin("", "invalidPassword");
  loginPage.VerifyLoginFailed();
});

Scenario("fail to login with invalid email and password", ({ I }) => {
  loginPage.OpenLoginPage();
  loginPage.DoLogin("invalidEmail@gmail.com", "invalidPassword");
  loginPage.VerifyLoginFailed();
});
