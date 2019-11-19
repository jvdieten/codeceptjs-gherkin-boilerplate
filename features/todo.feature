Feature: Todo application
  In order to achieve my goals
  As a persona
  I want to be able to create todo items

  Scenario: create new todo item
    Given I have an empty todo list
    When I create new todo item "task1"
    Then Todo list has 1 item
