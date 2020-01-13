Feature: Search Google
  As a user
  I should be able to search in google

  Scenario: Search for Protractor in google
    Given I Log into google
    And I search for "Protractor"
    Then the search should give me more than 1 result

    Scenario: Search for Selenium in google
    Given I Log into google
    And I search for "Selenium"
    Then the search should give me more than 100 result