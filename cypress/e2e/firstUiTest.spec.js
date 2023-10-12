//<reference types='cypress'/
describe('First  Ui suite', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200')
    })

  it("Task #1 Verify Color of Themas ",() =>{
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

  it("Task #2 Verify Product Details Text",() =>{
    cy.get('[ng-reflect-icon="layout-outline"]').click();
    cy.get('a[title="Accordion"] > span.menu-title').click();
    cy.get('.item-body').should('not.be.visible');
    cy.get('button.appearance-filled').click({ force: true }).should('not.have.class', 'accordion-item-header-collapsed');
    cy.get('.item-body').should('be.visible').and('contain', 'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.');
  })

  it(" Task #3 Verify Popover Text",() =>{
   cy.get('nb-icon.menu-icon.ng-tns-c7-7').click();
    cy.get('a.ng-star-inserted[title="Popover"]').click();
    cy.get('button').contains('Right').trigger('mouseenter');
    cy.get('nb-popover').should('be.visible').contains('Hello, how are you today?');
  })

  it("Task #4 Verify Entered Name Value",() =>{
    cy.get('nb-icon.menu-icon.ng-tns-c7-7').click();
    cy.get('a.ng-tns-c7-8[title="Dialog"]').click();
    cy.get('button:contains("Enter Name")').click();
    cy.get('input[placeholder="Name').type('Valeriia');
    cy.get('button.status-success[ng-reflect-status="success"]').click();
    cy.get('li.ng-star-inserted').should('be.visible').and('contain', 'Valeriia');
  })
})
