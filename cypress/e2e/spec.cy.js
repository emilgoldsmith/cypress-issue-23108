describe("empty spec", function () {
  beforeEach(function () {
    cy.intercept("GET", new RegExp(`^${Cypress.config().baseUrl}`), (req) => {
    });
  });

  it("passes", function () {
    cy.visit('/');
    cy.get('#files')
    cy.wait(70 * 1000);
    cy.visit('/');
    cy.get('#files')
  });
});
