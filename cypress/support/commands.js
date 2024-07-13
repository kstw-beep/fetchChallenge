// Types the barNumber in the first spot in the left bowl
Cypress.Commands.add('leftBowl', (barNumber) => {
  cy.get('[id="left_0"]').type(barNumber);
});

// Types the barNumber in the first spot in the right bowl
Cypress.Commands.add('rightBowl', (barNumber) => {
  cy.get('[id="right_0"]').type(barNumber);
});
