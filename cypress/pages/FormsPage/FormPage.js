export class FormPage {
  elements = {
    visitFormPage()
      {
        cy.get('a[title="Forms"]').click();
      }
  }
}
