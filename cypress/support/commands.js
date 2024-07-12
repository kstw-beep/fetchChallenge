// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// finds fake gold bar
//command that runs game and finds correct answer
// need loop/algo that finds the imposter and returns the value to input for verification tests
// utilizes binary search?/method of halving
//putting here instead of e2e because will change verytime and need to make sure happens after page load i think e2e mmight happen before?
// and if that's true then pull the visit out of there too i guess
// from them these are the steps to take -
//  clicks on buttons (“Weigh”, “Reset”)
// b. Getting the measurement results (field between the 'bowls')
// c. filling out the bowls grids with bar numbers (0 to 8)
// d. getting a list of weighing
// e. Clicking on the gold bar number at the bottom of the website and checking for the alert message
// so actually just an end to end i guess. grr.
// start with their way and see if you can make it better the way you normally would. how bout that?

// command that will select one other random int within range excluding output from previous command
