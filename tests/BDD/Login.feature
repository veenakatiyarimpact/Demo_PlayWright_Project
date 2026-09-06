Feature: Login functionality

Scenario: Successful login
  Given user is on the login page
  When user enters valid username and password
  And clicks the login button
  Then user should see the home page