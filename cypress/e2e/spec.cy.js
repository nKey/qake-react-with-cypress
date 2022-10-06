/// <reference types="cypress" />
it('shows the host and path', () => {
  cy.visit('/')
  cy.contains('[data-cy=location]', 'localhost /')
})
