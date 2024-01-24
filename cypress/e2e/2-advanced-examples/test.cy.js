/// <reference types="cypress" />

describe('PiggyBank App Test', () => {
  beforeEach(() => {
    // Visit the PiggyBank app
    cy.visit('http://localhost:3000')
  })

  it('should navigate to different pages and perform basic interactions', () => {

    // Click on the 'Transacties' link in the navigation bar
    cy.contains('Transacties').click()

    // Assert that the page contains the text 'Transaction Overview'
    cy.contains('Transaction Overview').should('exist')

    // Click on the 'Overboeken' link in the navigation bar
    cy.contains('Overboeken').click()

    // Assert that the page contains the text 'Transfer'
    cy.contains('Transfer').should('exist')

  })

})
