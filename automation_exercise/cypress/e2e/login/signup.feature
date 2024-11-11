Feature: Creation of new clients
    This feature about all test scenarios where will be all use cases of the signUp funcion

        @HU01 @Regression @Signup
        Scenario: Access signup
            Given User navigate to " Signup / Login"
             When User ingress name and email and confirm
             Then Access successfully at "Enter Account Information"
              And Username and email are preloaded