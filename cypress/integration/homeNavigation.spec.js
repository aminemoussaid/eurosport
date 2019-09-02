/// <reference types="Cypress" />


context('Home Page Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('navigates to players', () => {
    // Click on Button
    cy.get('button').click()
    cy.location('pathname').should('include', 'players')
    // Come back and click on players Link
    cy.go('back')
    cy.get('a').contains('Players').click()
    cy.location('pathname').should('include', 'players')

  })
})
