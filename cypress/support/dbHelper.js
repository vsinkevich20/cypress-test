export class DbHelper{
  static getAllCategories() {
    return cy.findMany({}, {collection: 'categories'})
  }
}
