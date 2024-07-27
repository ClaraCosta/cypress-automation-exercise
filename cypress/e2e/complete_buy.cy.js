describe('Complete buy', () => {


  //==================================================================================================================
  //                                       | COMPLETE BUY TESTS |
  //==================================================================================================================
    
  
  // LOGIN STEPS
  it('1 - Doing login and Buying two items', () => {
  
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
  

    // BUY STEPS
  
      //Find the products page
      cy.get('ul').children('li').contains(' Products').click();

      //Select one item and add to card
      cy.get('[data-product-id="4"]').contains('Add to cart').click();
      cy.get("#cartModal").contains('Continue Shopping').click();

      //Select another item and add to card
      cy.get('[data-product-id="7"]').contains('Add to cart').click();
      cy.get("#cartModal").contains('View Cart').click();
      cy.url('https://www.automationexercise.com/view-cart');
      cy.get('#do_action').contains('Proceed To Checkout').click();

  
    // REVIEW ORDER
      cy.contains('Review Your Order');
      cy.get('textarea').type('Some message for complete the buy');
      cy.get("#cart_items").contains('Place Order').click();

    //INSERT CARD INFOS
      cy.url('https://www.automationexercise.com/payment');

      cy.get('[data-qa="name-on-card"]').type('Name od card owner');
      cy.get('[data-qa="card-number"]').type('1235837837236');
      cy.get('[data-qa="cvc"]').type('915');
      cy.get('[data-qa="expiry-month"]').type('12');
      cy.get('[data-qa="expiry-year"]').type('2070');

      //Finishing the buy
      cy.get('[data-qa="pay-button"]').click();

      // Assert is done
      cy.get('[data-qa="order-placed"] > b').should('have.text', 'Order Placed!');

  
    })
  
  
  
    })
  