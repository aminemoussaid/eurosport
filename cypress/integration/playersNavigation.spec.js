/// <reference types="Cypress" />


context('Players Page Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/players')
  })

  it('navigates to home', () => {
    // Click on home Link
    cy.get('a').contains('Home').click()
    cy.location('pathname').should('not.include', 'players')

  })
})
