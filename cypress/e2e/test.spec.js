
import '../support/commands';

describe('Test via API', () => {
  beforeEach(() => {
    cy.loginByAPI();
  });

  it('Overview Visit ', () => {
    cy.contains("Огляд").click()
  });

  it('Add Category', () => {
    cy.contains("Асортимент").click()
    cy.get('button[routerlink="/categories/new"]').click();
    cy.get('input[formcontrolname="name"].ng-untouched.ng-pristine.ng-invalid').type('Category 1');
    cy.get('button.waves-effect.waves-light.btn[type="submit"]').click()
    cy.contains("Асортимент").click()
    cy.get('button[routerlink="/categories/new"]').click();
    cy.get('input[formcontrolname="name"].ng-untouched.ng-pristine.ng-invalid').type('Category 2');
    cy.get('button.waves-effect.waves-light.btn[type="submit"]').click()

  });

  it('Get a List of Categories', () => {
    cy.contains("Асортимент").click()
    cy.getCategories().then(categories => {
      expect(categories).to.have.length.above(0);
    });
  });
  it('Verify Match the number of categories in UI and API', () => {
    cy.getCategories().then(apiCategories => {

      cy.contains('Асортимент').click();

      cy.get('.collection a.collection-item').should('have.length', apiCategories.length).then(uiCategories => {

        expect(uiCategories.length).to.equal(apiCategories.length);
      });
    });
  });
});


