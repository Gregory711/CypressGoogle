describe('Google Search', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/');
    cy.get('textarea[name="q"]').type('Cypress{enter}');
    cy.title().should('equal', 'Cypress - Google Search');
  })
})