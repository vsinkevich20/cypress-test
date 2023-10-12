export class AuthPage {
  visitAuthPage() {
    cy.get('nb-icon[ng-reflect-icon="lock-outline"]').click();
  }
}

