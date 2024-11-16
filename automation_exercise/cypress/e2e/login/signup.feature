Feature: Creation of new clients
    This feature about all test scenarios where will be all use cases of the signUp funcion

        @HU01 @Regression @Signup
        Scenario: Access signup
            Given User navigate to " Signup / Login"
             When User ingress name and email and confirm
             Then Access successfully at "Enter Account Information"
              And Username and email are preloaded


        @HU01 @Regression @Signup
        Scenario: Register user
            Given User navigate to " Signup / Login"
             When User ingress name and email and confirm
              And User Fill details: Title, Name, Email, Password, Date of birth
              And User select checkbox: 'Sign up for our newsletter!' and 'Receive special offers from our partners!'
              And User Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
              And Click 'Create Account'
             Then The new user is created successfuly with de legend 'Account Created!'
              And User see the text ' Logged in as ' together with the username