Feature: Login
  As a user, I want to be able to login to the application so that I can view my contact list

  @PO
  Scenario Outline: <ID>: As a valid user, I can login to the application
    Given I am on the login page
    When I enter my valid credentials
    When I click the login button
    Then I should be taken to the contact list page
    Examples:
      | ID          |
      | TC-LOGIN-01 |

  @P1
  Scenario Outline: <ID>: As an invalid user, I cannot login to the application
    Given I am on the login page
    When I enter my credentials with invalid <INVALID_SCENARIO>
    When I click the login button
    Then I should be seen the error message of invalid credentials
    Examples:
      | ID          | INVALID         |
      | TC-LOGIN-02 | email           |
      | TC-LOGIN-03 | password        |
      | TC-LOGIN-04 | email, password |
