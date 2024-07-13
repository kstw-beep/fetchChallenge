/**
 * End to End Test for Fetch Scale Game Challenge
 *
 * @author Kim Schwartz <kimba.schwartzy@gmail.com>
 */

var WINNINGINDEX = 4;

describe('Tests to make sure Scale is functioning as expected', () => {
  it('E2E', () => {
    cy.visit('http://sdetchallenge.fetch.com/');
    cy.wait(300);
    cy.get('[id="left_0"]').type('0');
    cy.get('[id="right_0"]').type('8');
    cy.get('[id="weigh"]').click();
    cy.wait(3000);
    cy.get('.game-info')
      .invoke('text')
      .then((text1) => {
        if (text1.includes('>')) {
          WINNINGINDEX = 8;
          //return '8';
        } else if (text1.includes('<')) {
          WINNINGINDEX = 0;
          //return '0';
          // console.log('BONER'); - CONSOLE LOG MAKES IT RETURN WHY DOESN'T RETURN FIGURE THAT OUT
          //AND THEN FLIP LOGICS SO NUMBERS IN SAME ORDERS
        } else {
          cy.get('[id="left_1"]').type('1');
          cy.get('[id="right_1"]').type('7');
          cy.get('[id="weigh"]').click();
          cy.wait(3000);
          cy.get('.game-info')
            .invoke('text')
            .then((text2) => {
              if (text2.includes('>')) {
                WINNINGINDEX = 7;
                //return '7';
              } else if (text2.includes('<')) {
                WINNINGINDEX = 1;
                // return '1';
              } else {
                cy.get('[id="left_2"]').type('2');
                cy.get('[id="right_2"]').type('6');
                cy.get('[id="weigh"]').click();
                cy.wait(3000);
                cy.get('.game-info')
                  .invoke('text')
                  .then((text3) => {
                    if (text3.includes('>')) {
                      WINNINGINDEX = 6;
                      // return '6';
                    } else if (text3.includes('<')) {
                      WINNINGINDEX = 2;
                      //return '2';
                    } else {
                      cy.get('[id="left_3"]').type('3');
                      cy.get('[id="right_3"]').type('5');
                      cy.get('[id="weigh"]').click();
                      cy.wait(3000);
                      cy.get('.game-info')
                        .invoke('text')
                        .then((text4) => {
                          if (text4.includes('>')) {
                            WINNINGINDEX = 5;
                            //return '5';
                          } else if (text4.includes('<')) {
                            WINNINGINDEX = 3;
                            //return '3';
                          } else {
                            WINNINGINDEX = 4;
                            //return '4';
                          }
                        });
                    }
                  });
              }
            });
        }
      });
    console.log(WINNINGINDEX);
    //OKAY. SO NOW THE PROBLEM IS THAT WINNINGINDEX ISN'T GETTING REASSIGNED
    cy.get('.coins').contains(WINNINGINDEX).click();
    //cy.get('.button').contains(WINNINGINDEX).click();
    // });
    //verify success alert is displayed
    // cy.get(ALERTWITHSUCCESSMESSAGE) 'Yay! You find it!' .should('HOWEVER WE VERIFY ALERTS POP IN CYPRESS')
  });
});

// });

//maybe two separate funcitons/things like weighings independent from just looping through
//guesses until we get the correct alert?
