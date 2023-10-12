//<reference types='cypress'/
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {RegisterPage} from "../pages/AuthPage/RegisterPage";

describe('Register Suite', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200')
      const  auth = new AuthPage();
      auth.visitAuthPage();
    })

  it("Register Validation Messages",() =>{
    const  register = new RegisterPage();
    register.visitRegisterPage()
    register.getFullNameField().type('v');
    cy.get('body').click();
    cy.get('p.caption.status-danger:contains("Full name should contains from 4 to 50 characters")').should('be.visible');
    register.getEmailAddressField().type('valeriia');
    cy.get('body').click();
    cy.get('p.caption.status-danger:contains("Email should be the real one!")').should('be.visible');
    register.getPasswordField().type('123');
    cy.get('p.caption.status-danger:contains("Password should contain from 4 to 50 characters")').should('be.visible');
    register.getRepeatPasswordField().click();
    cy.get('body').click();
    cy.get('p.caption.status-danger:contains("Password confirmation is required!")').should('be.visible');

  })
  it("User is Registered ",() =>{
    const  register = new RegisterPage();
    register.visitRegisterPage()
    register.getFullNameField().type('Valeriia');
    register.getEmailAddressField().type('valeriia@gmail.com');
    register.getPasswordField().type('12345');
    register.getRepeatPasswordField().type('12345');
    cy.get('span.custom-checkbox').click();
    register.getRegisterButton().click()
    cy.get('div.user-picture.image').should('have.attr', 'style', 'background-image: url("assets/images/nick.png");');

  })
})
