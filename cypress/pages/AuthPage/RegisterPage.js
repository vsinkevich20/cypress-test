export class RegisterPage {
  visitRegisterPage() {
    cy.get('span.menu-title:contains("Register")').click();
  }
  getFullNameField() {
    return cy.get('input#input-name[ng-reflect-name="fullName"]');
  }
  getEmailAddressField() {
    return cy.get('input#input-email[ng-reflect-name="email"][ng-reflect-required="true"]');
  }
  getPasswordField() {
    return cy.get('input#input-password[ng-reflect-name="password"][ng-reflect-required="true"]');
  }
  getRepeatPasswordField() {
    return cy.get('input#input-re-password[ng-reflect-name="rePass"][ng-reflect-required="true"]');
  }
  getRegisterButton() {
    return cy.get('button:contains("Register")');
  }

}

