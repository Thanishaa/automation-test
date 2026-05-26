/// <reference path="./parabank.d.ts" />
/** URL from cypress.config.ts → env.parabankUrl */
const parabankUrl = Cypress.env("parabankUrl");

describe("ParaBank register", () => {
  it("Register", () => {
    const username = `user_${Date.now()}`;
    const password = `Pass@${Date.now().toString().slice(-6)}`;

    cy.visit(parabankUrl);
    cy.contains("a", "Register").click();
    cy.wait(500).registerParabank(username, password);
    cy.wait(500).loginParabank(username, password);
    cy.contains("Accounts Overview").should("be.visible");
    cy.get(":nth-child(2) > b")
      .should("be.visible")
      .invoke("text")
      .then((amount) => {
        const balance = amount.trim();
        cy.log(`Account balance: ${balance}`);
      });
  });
});
