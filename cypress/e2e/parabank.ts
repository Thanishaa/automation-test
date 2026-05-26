/// <reference path="./parabank.d.ts" />

export function loginParabank(username: string, password: string): void {
  cy.get('form > :nth-child(2) > .input').type(username);
  cy.get(':nth-child(4) > .input').type(password);
  cy.contains('Log In').click()
}

const registerParabank = (username: string, password: string) => {
  cy.get('#customer\\.firstName').type('John');
  cy.get('#customer\\.lastName').type('Doe');
  cy.get('#customer\\.address\\.street').type('123 Main St');
  cy.get('#customer\\.address\\.city').type('Anytown');
  cy.get('#customer\\.address\\.state').type('CA');
  cy.get('#customer\\.address\\.zipCode').type('12345');
  cy.get('#customer\\.phoneNumber').type('1234567890');
  cy.get('#customer\\.ssn').type('123456789');
  cy.get('#customer\\.username').type(username);
  cy.get('#customer\\.password').type(password);
  cy.get('#repeatedPassword').type(password);
  cy.get('[colspan="2"] > .button').contains('Register').click();
  cy.wait(500).contains('Log Out').should('be.visible').click()
}

Cypress.Commands.add("loginParabank", loginParabank);
Cypress.Commands.add("registerParabank", registerParabank);
