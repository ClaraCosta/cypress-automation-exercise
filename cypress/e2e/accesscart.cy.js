describe('Access cart', () => {
  it(' 1 - Acessando a home da página Automation Exercise', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.contains(' Cart').children('i').should('have.class', 'fa fa-shopping-cart').click();
    cy.get('ol').children('li').should('have.class', '');
    
  })
})