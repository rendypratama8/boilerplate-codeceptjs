Feature: Logout
  As a user, I want to be able to logout from the application

  @P0
  Scenario Outline: <ID>: As a user, I can logout from the application
    Given I am on the contact list Page
    When I do logout
    Then I should be taken to the login page
    Examples:
      | ID           |
      | TC-LOGOUT-01 |