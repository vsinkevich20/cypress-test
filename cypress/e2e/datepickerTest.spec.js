//<reference types='cypress'/
/// <reference types="cypress" />
import { FormPage } from "../pages/FormsPage/FormPage";
import { DatapickerPage } from "../pages/FormsPage/DatapickerPage";
import moment from "moment";

describe('DataPicker Suite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    const form = new FormPage();
    form.elements.visitFormPage();
  });

  it("DataPicker Test", () => {
    const formattedDate = moment().format('MMM D[,] YYYY');
    const datapic = new DatapickerPage();
    datapic.elements.visitDatapickerPage();
    cy.get('[ng-reflect-icon="menu-2-outline"]').click();
    datapic.elements.getInputField().click();
    datapic.elements.getTodayButton().click();
    cy.get("input[placeholder='Form Picker']").should('have.value', formattedDate);
  });
});

