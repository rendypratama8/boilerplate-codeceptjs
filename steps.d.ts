/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/web/auth/Login');
type logoutPage = typeof import('./pages/web/auth/Logout');
type signUpPage = typeof import('./pages/web/auth/SignUp');
type contactListPage = typeof import('./pages/web/contact/ContactList');
type contactAddPage = typeof import('./pages/web/contact/ContactAdd');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, logoutPage: logoutPage, signUpPage: signUpPage, contactListPage: contactListPage, contactAddPage: contactAddPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
