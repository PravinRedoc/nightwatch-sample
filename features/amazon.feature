Feature: Amazon Find Text
  Scenario: Find alt property of image
    Scenario Outline:
    Given User launches url
    When User searches for "<picture>"
    Then The selected picture's alt attribute is printed
      Examples:
      |picture|
      |Amazon TV firestick|
      |Casual shirts      |
      |Track Pants        |