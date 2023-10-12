export class LoginPage {
  visitLoginPage() {
    cy.get('a[ng-reflect-router-link="/auth/login"]').click();
  }
  getEmailInput() {
    return cy.get('input#input-email[ng-reflect-required="true"]');
  }

  getPasswordInput() {
    return cy.get('input#input-password[ng-reflect-required="true"]');
  }

  getLoginButton() {
    return cy.get('button[fullwidth][status="primary');
  }
  getForgotPasswordButton() {
    return cy.get('a.forgot-password');
  }
  getEmailForgotInput(){
    return cy.get('input#input-email[ng-reflect-required="true"]')
  }
  getBackToLogin(){
    return cy.get('section.sign-in-or-up a.text-link:contains("Back to Log In")')
  }
  getBackToRegister(){
    return cy.get('section.sign-in-or-up a.text-link:contains("Register")')
  }

}

