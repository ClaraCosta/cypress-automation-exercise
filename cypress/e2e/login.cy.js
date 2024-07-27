describe('Login', () => {


//==================================================================================================================
//                                                | LOGIN TESTS |
//==================================================================================================================
  it('1 - WHRONG - EMAIL', () => {

    //Access the URL 
    cy.visit(Cypress.config('baseUrl'));


    //Identify the login page
    cy.contains(' Signup / Login').children('i').should('have.class', 'fa fa-lock').click();
    cy.url('https://www.automationexercise.com/login');

    //Insert datas (wrong email)
    cy.get('[data-qa="login-email"]').click().type("invalidemail@email");
    cy.get('[data-qa="login-password"]').click().type("passwordtest123");
    cy.get('[data-qa="login-button"]').click();

    //Assert the user stay in the same page and email is wrong - put invalid email
    cy.get('p').contains('Your email or password is incorrect!');
    cy.url('https://www.automationexercise.com/login'); 

  })

  it('2 - WHRONG - PASSWORD', () => {

    //Access the URL 
    cy.visit(Cypress.config('baseUrl'));

    //Identify the login page
    cy.contains(' Signup / Login').children('i').should('have.class', 'fa fa-lock').click();
    cy.url('https://www.automationexercise.com/login');

    //Insert datas (wrong password)
    cy.get('[data-qa="login-email"]').click().type("emailtest@email.com");
    cy.get('[data-qa="login-password"]').click().type("a");
    cy.get('[data-qa="login-button"]').click();

    //Assert the user stay in the same page and password is wrong - put invalid email
    cy.get('p').contains('Your email or password is incorrect!');
    cy.url('https://www.automationexercise.com/login'); 

  })

  it('3 - CORRECT - EMAIL AND PASSWORD', () => {

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


    



  })
