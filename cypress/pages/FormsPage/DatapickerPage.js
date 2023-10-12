export class DatapickerPage {
  elements = {
    visitDatapickerPage() {
      cy.get('span.menu-title:contains("Datepicker")').click();
    },
    getInputField() {
      return cy.get('nb-card-body input[placeholder="Form Picker"]');
    },
    getTodayButton() {
      return cy.get('.day-cell.today');
    },
  }
}
