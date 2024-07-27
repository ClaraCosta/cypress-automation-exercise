describe('Complete buy', () => {


//==================================================================================================================
//                                       | COMPLETE BUY TESTS |
//==================================================================================================================
  it('1 - Doing login', () => {

    //Access the URL 
    cy.visit(Cypress.config('baseUrl'));

    //Identify the login page
    cy.contains(' Signup / Login').children('i').should('have.class', 'fa fa-lock').click();
    cy.url('https://www.automationexercise.com/login');

    //Insert datas (wrong password)
    cy.get('[data-qa="login-email"]').click().type("emailtest@email.com");
    cy.get('[data-qa="login-password"]').click().type("passwordtest123");
    cy.get('[data-qa="login-button"]').click();

    //Assert the login is completed
    cy.get('ul').children('li', ' Logout');

  })

  it('2 - Buy two items', () => {

    //Action one
    cy.visit(Cypress.config('baseUrl'));

    //Action two


  })



  })
