describe('Visit Site', () => {
  it(' 1 - Acessando a home da página Automation Exercise', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('h1').contains('Automation')
    
  })
})