//<reference types='cypress'/
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {LoginPage} from "../pages/AuthPage/LoginPage";

describe('Forgot Password Suite', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200')
      const  auth = new AuthPage();
      auth.visitAuthPage();
    })

  it("Forgot Password Validation Messages And Back Buttons ",() =>{
    const  login = new LoginPage();
    login.visitLoginPage();
    login.getForgotPasswordButton().click()
    login.getEmailForgotInput().type('valeriia');
    cy.get('body').click();
    cy.get('p.caption.status-danger:contains("Email should be the real one!")').should('be.visible');
    login.getBackToLogin().click();
    cy.get('h1.title#title').should('be.visible').and('contain', 'Login');
    login.getForgotPasswordButton().click()
    login.getBackToRegister().click();
    cy.get('h1.title#title').should('be.visible').and('contain', 'Register');
  })
  it("Back Buttons Flow Test ",() =>{
    const  login = new LoginPage();
    login.visitLoginPage();
    login.getForgotPasswordButton().click()
    login.getBackToLogin().click();
    cy.get('h1.title#title').should('be.visible').and('contain', 'Login');
    login.getForgotPasswordButton().click()
    login.getBackToRegister().click();
    cy.get('h1.title#title').should('be.visible').and('contain', 'Register');
  })
})
