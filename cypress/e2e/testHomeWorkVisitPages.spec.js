describe('First  suite', () => {
    it('First test Visit Pages', () => {
      cy.visit('/pages/layout/accordion');
      cy.visit('/pages/forms/layouts')
    })
  })
