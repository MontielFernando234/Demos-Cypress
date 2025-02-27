Feature: User Login
TC about login scenarios

        @US02 @Regression @Login
        Scenario: Login with valid credentials
            Given User "UserTest" navigate to " Signup / Login" in shop store
             When User type mail "cypress@test.com" and Password "Test1234!"
              And send credentials
             Then User see the text ' Logged in as ' together with the username
