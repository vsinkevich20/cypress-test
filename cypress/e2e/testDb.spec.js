// Your test file

import '../support/commands';

describe('Test via API', () => {
  beforeEach(() => {
    cy.loginByAPI();
  });

  it('Overview Visit', () => {
    cy.contains('Огляд').click();
  });

  it('Get a List of Categories from API', () => {
    cy.contains('Асортимент').click();
    cy.getCategories().then(apiCategories => {
    });
  });
});
