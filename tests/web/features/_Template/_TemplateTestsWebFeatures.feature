Feature: FeatureName
  As a user, I want to be able to use the feature

  @TAG-HERE // add your tag here, beneficial if want to run several test cases in different module
  Scenario Outline: <ID>: As a user, I can use the feature dashboard
    Given write your given scenario here
    When write your when scenario here
    Then write your then scenario here
    Examples:
      | ID           |
      | TC-MODULE-01 |

  @TAG-HERE
  Scenario Outline: <ID>: As an invalid user, I cannot use the feature dashboard
    Given write your given scenario here
    When write your when scenario here with <SCENARIO>
    Then write your then scenario here
    Examples:
      | ID           | SCENARIO            |
      | TC-MODULE-02 | negative scenario 1 |
      | TC-MODULE-03 | negative scenario 2 |
