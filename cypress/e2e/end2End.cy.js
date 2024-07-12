/**
 * End to End Test for Fetch Scale Game Challenge
 *
 * @author Kim Schwartz <kimba.schwartzy@gmail.com>
 */

var WINNINGINDEX;

describe('Tests to make sure Scale is functioning as expected', () => {
  it('E2E', () => {
    cy.visit('http://sdetchallenge.fetch.com/');
    cy.wait(300);
    cy.get('[id="left_0"]').type('0');
    cy.get('[id="right_0"]').type('8');
    cy.get('[id="weigh"]').click();
    cy.wait(3000);

    //     } else (

    //     )
    //   });
    // // cy.get('.game-info').within(() => {
    // //.includes
    // //NEED A WAY TO CHECK IF < OR > IS RETURNED IN WEIGHINGS BUT IT'S SAYING IT ALWAYS IS RIGHT NOW/IT'S NOT CHECKING
    // //contains will recognize the string but it's still not being iffy
    // if (
    //   cy.contains('>').then(($el) => {
    //     Cypress.dom.isVisible($el); // true
    //   })
    // ) {
    //   console.log('yes');
    // }
    // // });
    // if (
    //   //maybe cy.get('.game-info').contains
    //   // (
    //   //   document.documentElement.textContent ||
    //   //   document.documentElement.innerText
    //   // ).indexOf('>') > -1
    //   // cy.contains('>')
    //   cy.get('>').then(($el) => {
    //     Cypress.dom.isVisible($el); // true
    //   })
    // ) {
    //   // if('.game-info'.contains('>')){
    //   // return (WINNINGINDEX = '8');
    //   console.log('yes');
    // } else if (
    //   // (
    //   //   document.documentElement.textContent ||
    //   //   document.documentElement.innerText
    //   // ).indexOf('<') > -1
    //   cy.get('<').then(($el) => {
    //     Cypress.dom.isVisible($el); // true
    //   })
    // ) {
    //   // else if ('.game-info'.contains('<')){
    //   return (WINNINGINDEX = '0');
    // } else {
    //this works to find the string
    cy.get('.game-info')
      .invoke('text')
      .then((text1) => {
        if (text1.includes('>')) {
          return (WINNINGINDEX = '8');
        } else if (text1.includes('<')) {
          return (WINNINGINDEX = '0');
        } else {
          cy.get('[id="left_1"]').type('1');
          cy.get('[id="right_1"]').type('7');
          cy.get('[id="weigh"]').click();
          cy.get('.game-info')
            .invoke('text')
            .then((text2) => {
              if (text2.includes('>')) {
                return (WINNINGINDEX = '7');
              } else if (text2.includes('<')) {
                return (WINNINGINDEX = '1');
              } else {
                cy.get('[id="left_1"]').type('2');
                cy.get('[id="right_1"]').type('6');
                cy.get('[id="weigh"]').click();
                cy.get('.game-info')
                  .invoke('text')
                  .then((text3) => {
                    if (text3.includes('>')) {
                      return (WINNINGINDEX = '6');
                    } else if (text3.includes('<')) {
                      return (WINNINGINDEX = '2');
                    } else {
                      cy.get('[id="left_1"]').type('3');
                      cy.get('[id="right_1"]').type('5');
                      cy.get('[id="weigh"]').click();
                      cy.get('.game-info')
                        .invoke('text')
                        .then((text4) => {
                          if (text4.includes('>')) {
                            return (WINNINGINDEX = '5');
                          } else if (text4.includes('<')) {
                            return (WINNINGINDEX = '3');
                          } else {
                            return (WINNINGINDEX = '4');
                          }
                        });
                    }
                  });
              }
            });

          //         if (
          //   (
          //     document.documentElement.textContent ||
          //     document.documentElement.innerText
          //   ).indexOf('>') > -1
          // ) {
          //   // if('.game-info'.contains('>')){
          //   return (WINNINGINDEX = '7');
          // }
          // // else if ('.game-info'.contains('<')){
          // else if (
          //   (
          //     document.documentElement.textContent ||
          //     document.documentElement.innerText
          //   ).indexOf('<') > -1
          // ) {
          //   return (WINNINGINDEX = '1');
          // } else {
          //   cy.get('[id="left_2"]').type('2');
          //   cy.get('[id="right_2"]').type('6');
          //   cy.get('[id="weigh"]').click();
          //   if (
          //     (
          //       document.documentElement.textContent ||
          //       document.documentElement.innerText
          //     ).indexOf('>') > -1
          //   ) {
          //     // if('.game-info'.contains('>')){
          //     return (WINNINGINDEX = '6');
          //   }
          //   //else if ('.game-info'.contains('<')){
          //   else if (
          //     (
          //       document.documentElement.textContent ||
          //       document.documentElement.innerText
          //     ).indexOf('<') > -1
          //   ) {
          //     return (WINNINGINDEX = 2);
          //   } else {
          //     cy.get('[id="left_3"]').type('3');
          //     cy.get('[id="right_3"]').type('5');
          //     cy.get('[id="weigh"]').click();
          //     if (
          //       (
          //         document.documentElement.textContent ||
          //         document.documentElement.innerText
          //       ).indexOf('>') > -1
          //     ) {
          //       // if('.game-info'.contains('>')){
          //       return (WINNINGINDEX = '5');
          //     }
          //     // else if ('.game-info'.contains('<')){
          //     else if (
          //       (
          //         document.documentElement.textContent ||
          //         document.documentElement.innerText
          //       ).indexOf('<') > -1
          //     ) {
          //       return (WINNINGINDEX = '3');
          //     } else {
          //       return (WINNINGINDEX = '4');
          //     }
          //   }
        }
      });
  });

  //click winning coin #
  // cy.get('.coins').within(()=>{
  //     cy.get('.button').eq($WINNINGINDEX)
  //     //or id="coin_${WINNINGINDEX}"
  // })
  // //verify success alert is displayed
  // cy.get(ALERTWITHSUCCESSMESSAGE) 'Yay! You find it!' .should('HOWEVER WE VERIFY ALERTS POP IN CYPRESS')
});

// });

//maybe two separate funcitons/things like weighings independent from just looping through
//guesses until we get the correct alert?
