describe('Visit Site', () => {
  it(' 1 - Acessando a home da página Automation Exercise', () => {
    cy.visit(Cypress.config('baseUrl'));
    cy.get('h1').contains('Automation')
    
  })
})