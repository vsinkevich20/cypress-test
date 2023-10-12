//<reference types='cypress'/
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {LoginPage} from "../pages/AuthPage/LoginPage";
import {RegisterPage} from "../pages/AuthPage/RegisterPage";

describe('Second  Ui suite', () => {
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
  it("Register Validation Messages ",() =>{
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
