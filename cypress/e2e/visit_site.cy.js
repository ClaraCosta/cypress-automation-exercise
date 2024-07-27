describe('Visit Site', () => {

//==================================================================================================================
//                                          | VISIT SITE TESTS |
//================================================================================================================== 

  it(' 1 - Acessando a home da página Automation Exercise', () => {

    //Assert the page is correct
    cy.visit(Cypress.config('baseUrl'));
    cy.get('h1').contains('Automation')
    
  })
})