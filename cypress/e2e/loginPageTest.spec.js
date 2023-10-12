//<reference types='cypress'/
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {LoginPage} from "../pages/AuthPage/LoginPage";

describe('Login Suite', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200')
      const  auth = new AuthPage();
      auth.visitAuthPage();
    })

  it("LogIn Validation Messages",() =>{
      const  login = new LoginPage();
      login.visitLoginPage();
    login.getEmailInput().type('invalid_email');
    login.getPasswordInput().type('123');
    cy.get('p.caption.status-danger').should('contain', 'Email should be the real one!');
    login.getEmailInput().click();
    cy.get('p.caption.status-danger').should('contain', 'Password should contain from 4 to 50 characters');
  })

  it("User is Logged In",() =>{
    const  login = new LoginPage();
    login.visitLoginPage();
    login.getEmailInput().type('valeriia@google.com');
    login.getPasswordInput().type('123456');
    login.getLoginButton().click();
    cy.get('div.user-picture.image').should('have.attr', 'style', 'background-image: url("assets/images/nick.png");');
  })
})
