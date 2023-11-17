import './commands.js';

Cypress.Commands.add('loginByAPI', () => {
  cy.request('POST', 'http://5.189.186.217/api/auth/login', {
    email: 'valeria.sinkevich20@gmail.com',
    password: 'Passer123@',
  }).then(res => {
    const token = res.body.token;
    cy.visit("http://5.189.186.217/overview", {
      onBeforeLoad(win) {
        win.localStorage.setItem("auth-token", token);
      }
    });
  });
});

Cypress.Commands.add('getCategories', () => {
  cy.request({
    method: 'POST',
    url: 'http://5.189.186.217/api/auth/login',
    body: {
      email: 'valeria.sinkevich20@gmail.com',
      password: 'Passer123@',
    },
  }).then(loginResponse => {
    const authToken = loginResponse.body.token;
    cy.request({
      method: 'GET',
      url: 'http://5.189.186.217/api/category',
      headers: {
        Authorization: `${authToken}`,
      },
    }).then(categoryResponse => {
      return categoryResponse.body;
    });
  });
});

