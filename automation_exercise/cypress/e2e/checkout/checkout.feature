Feature: Checkout

    TC related to place order Checkout.

        @smoke
        Scenario: Place order
            Given User "UserTest" navigate to " Signup / Login" in shop store
             When User type mail "cypress@test.com" and Password "Test1234!"
              And send credentials
              And "UserTest" go to "Products" page from shop store
              And He hover over first product and click "Add to cart"
              And Click "Continue Shopping" button from confirm modal
              And He hover over second product and click "Add to cart"
              And Click "View Cart" button from confirm modal
              And Go to checkout and clicked "Proceed To Checkout" button
              And Go to fill payment data doing click "Place Order" button
              And Fill Card Data
              And Confirm order doing click "Pay and Confirm Order" button
             Then "UserTest" see the title "Order Placed!" and the message "Congratulations! Your order has been confirmed!"