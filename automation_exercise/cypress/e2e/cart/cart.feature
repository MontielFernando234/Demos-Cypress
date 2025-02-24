Feature: Product Cart

    TC related to product carts (CRUD)

        @US06 @Regression @Cart
        Scenario: Add products in cart
            Given "UserTest" go to "Products" page from shop store
             When He hover over first product and click "Add to cart"
              And Click "Continue Shopping" button from confirm modal
              And He hover over second product and click "Add to cart"
              And Click "View Cart" button from confirm modal
             Then Both products are added to Cart
              And Their prices, quantity and total price are displayed correctly