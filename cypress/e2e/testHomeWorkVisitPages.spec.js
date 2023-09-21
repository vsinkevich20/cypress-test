//<reference types='cypress'/
describe('First  suite', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200')
    })
  xit("Verify Color of Themas ",() =>{
    cy.get(".select-button").click();
    cy.contains(" Light").click();
    cy.get("nb-layout-header nav").should('have.css','background-color', 'rgb(255, 255, 255)')
    cy.get(".select-button").click();
    cy.contains("Dark").click();
    cy.get("nb-layout-header nav").should('have.css','background-color', 'rgb(34, 43, 69)')
    cy.get(".select-button").click();
    cy.contains("Cosmic").click();
    cy.get("nb-layout-header nav").should('have.css','background-color', 'rgb(50, 50, 89)')
    cy.get(".select-button").click();
    cy.contains("Corporate").click();
    cy.get("nb-layout-header nav").should('have.css','background-color', 'rgb(255, 255, 255)')
  })
  xit("Verify Product Details Text is Visible",() =>{
    cy.get('[ng-reflect-icon="layout-outline"]').click();
    cy.get('a[title="Accordion"] > span.menu-title').click();
    cy.get('button.appearance-filled').click({ force: true }).should('not.have.class', 'accordion-item-header-collapsed');
  })
  it("Verify Popover Text",() =>{
    cy.get('a.ng-tns-c7-19.ng-star-inserted');
   cy.get('a[title="Popover"] > span.menu-title').click();
  })
})
