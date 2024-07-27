describe('Cart Tests', () => {

//==================================================================================================================
//                                          | ACCESS CART TESTS |
//==================================================================================================================

  it(' 1 - Access cart page', () => {

    //Access the URL
    cy.visit(Cypress.config('baseUrl'));

    //Assert is in Cart page
    cy.contains(' Cart').children('i').should('have.class', 'fa fa-shopping-cart').click();
    cy.get('ol').children('li').should('have.class', 'active');
    
  })
})