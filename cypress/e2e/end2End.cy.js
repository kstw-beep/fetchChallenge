/**
 * End to End Test for Fetch Scale Game Challenge
 *
 * @author Kim Schwartz <kimba.schwartzy@gmail.com>
 */

describe('Tests to make sure Scale is functioning as expected', () => {
  it('Tests that user can find the correct answer and produce the correct alert', () => {
    // visit site
    cy.visit('http://sdetchallenge.fetch.com/');
    // input 0 and 8 in the bowls
    cy.weighBars('0', '8');
    // check result for < or > and click correct bar in accordance
    cy.get('.result')
      .invoke('text')
      .then((text1) => {
        if (text1.includes('<')) {
          cy.get(`[id="coin_${0}"]`).click();
          // output number of weighing
          cy.fakeBar('0');
        } else if (text1.includes('>')) {
          cy.get('[id="coin_8"]').click();
          // output number of weighing
          cy.fakeBar('8');
        } else {
          // if bars are equal, hit reset and input 1 and 7 in bowls and try again
          cy.resetWeigh('1', '7');
          cy.get('.result')
            .invoke('text')
            .then((text2) => {
              if (text2.includes('<')) {
                cy.get('[id="coin_1"]').click();
                // output number of weighing
                cy.fakeBar('1');
              } else if (text2.includes('>')) {
                cy.get('[id="coin_7"]').click();
                // output number of weighing
                cy.fakeBar('7');
              } else {
                // if bars are equal, hit reset and input 2 and 6 in bowls and try again
                cy.resetWeigh('2', '6');
                cy.get('.result')
                  .invoke('text')
                  .then((text3) => {
                    if (text3.includes('<')) {
                      cy.get('[id="coin_2"]').click();
                      // output number of weighing
                      cy.fakeBar('2');
                    } else if (text3.includes('>')) {
                      cy.get('[id="coin_6"]').click();
                      // output number of weighing
                      cy.fakeBar('6');
                    } else {
                      // if bars are equal, hit reset and input 3 and 5 in bowls and try again
                      cy.resetWeigh('3', '5');
                      cy.get('.result')
                        .invoke('text')
                        .then((text4) => {
                          if (text4.includes('<')) {
                            cy.get('[id="coin_3"]').click();
                            // output number of weighing
                            cy.fakeBar('3');
                          } else if (text4.includes('>')) {
                            cy.get('[id="coin_5"]').click();
                            // output number of weighing
                            cy.fakeBar('5');
                          } else {
                            // if none of the previous weighings produced the fake bar, the fake one is 4
                            cy.get('[id="coin_4"]').click();
                            // output number of weighing
                            cy.fakeBar('4');
                          }
                        });
                    }
                  });
              }
            });
        }
      });
    // verifies alert produces expected success message as well as outputs alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Yay! You find it!');
      // output list of weighings made
      cy.get('.game-info')
        .invoke('text')
        .then((weighings) => {
          cy.log('List of Weighings', weighings);
        });
    });
  });

  it('Tests that an incorrect answer leads to appropriate alert', () => {
    // visit site
    cy.visit('http://sdetchallenge.fetch.com/');
    // enter 0 for weighing
    cy.leftBowl('0');
    // enter 8 for weighing
    cy.rightBowl('8');
    // click weigh
    cy.get('[id="weigh"]').click();
    // average wait for results to be produced, ideally would do this off of a network call instead but there are no discernible network calls
    cy.wait(3000);
    cy.get('.result')
      .invoke('text')
      .then((text) => {
        // < or = appear that would mean either 0 is the fake bar or they are equal, either way you can click coin 8 to produce the try again alert
        if (text.includes('<' || '=')) {
          cy.get('[id="coin_8"]').click();
        } else {
          // otherwise > appears so that would mean that 0 is an incorrect answer and you can click that to produce the Oops alert
          cy.get('[id="coin_0"]').click();
        }
      });
    // verify alert shows expected Try Again message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Oops! Try Again!');
    });
  });
});
