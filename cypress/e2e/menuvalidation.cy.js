  describe('Menu validation', () => {

//==================================================================================================================
//                                          | MENU VALIDATION TESTS |
//==================================================================================================================

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  })
  
  it('1 - Home', () => {
    cy.contains(' Home').children('i').should('have.class', 'fa fa-home').click();
    cy.get('h1').contains('Automation');
  })

  it('2 - Products', () => {
    cy.contains(' Products').children('i').should('have.class', 'material-icons card_travel').click();
    cy.url('https://www.automationexercise.com/products');
  })

  it('3 - Cart', () => {
    cy.contains(' Cart').children('i').should('have.class', 'fa fa-shopping-cart').click();
    cy.get('ol').children('li').should('have.class', 'active');
    cy.url('https://www.automationexercise.com/view_cart')
  })

  it('4 - Singup / Login', () => {
    cy.contains(' Signup / Login').children('i').should('have.class', 'fa fa-lock').click();
    cy.url('https://www.automationexercise.com/login')
  })

  it('5 - Test Cases', () => {
    cy.contains(' Test Cases').children('i').should('have.class', 'fa fa-list').click();
    cy.get('h2').should('have.class', 'title text-center');
    cy.url('https://www.automationexercise.com/test_cases'); 
  })


})