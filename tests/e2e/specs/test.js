// https://docs.cypress.io/api/table-of-contents

describe("Test Home Page", () => {
  it("Should render filter section title", () => {
    cy.visit("/");
    cy.contains("h3", "Filter by name and office");
  });
});
