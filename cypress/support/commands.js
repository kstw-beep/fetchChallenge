// Types the barNumber in the first spot in the left bowl
Cypress.Commands.add('leftBowl', (barNumber) => {
  cy.get('[id="left_0"]').type(barNumber);
});

// Types the barNumber in the first spot in the right bowl
Cypress.Commands.add('rightBowl', (barNumber) => {
  cy.get('[id="right_0"]').type(barNumber);
});

// Output for fake bar message
Cypress.Commands.add('fakeBar', (barNumber) => {
  cy.log(`Bar ${barNumber} is fake!`);
});

// Enter barNumbers in first spots in bowls and click weigh
Cypress.Commands.add('weighBars', (bar1, bar2) => {
  cy.leftBowl(bar1);
  cy.rightBowl(bar2);
  cy.get('[id="weigh"]').click();
  // wait average amount of time for results to show
  cy.wait(3000);
});

// Reset and weigh two bars
Cypress.Commands.add('resetWeigh', (bar1, bar2) => {
  cy.get('[id="reset"]').contains('Reset').click();
  cy.weighBars(bar1, bar2);
});
