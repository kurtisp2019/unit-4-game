/**
 * 
 *      This is game.js
 * 
 */

class Crystal {

    m_bIsHidden = false;
    m_nValue = 0;

    constructor(_nValue) {
        this.m_nValue = _nValue;
    }


};
class Game {

    // fields
    m_nNumWins = 0;
    m_nNumLoses = 0;
    m_nPlayerScore = 0;
    m_nRandomNum = 0;
    m_nCrystalVals = [];

    // constructors
    constructor() {

    }

    update() {

    }

    // methods

    // reset the game
    reset() {
       
        this.m_nPlayerScore = 0;
        $("#playerScore").text(this.m_nPlayerScore);
   

        this.m_nCrystalVals[0].m_nValue = this.genRandNum(1, 12);
        this.m_nCrystalVals[1].m_nValue = this.genRandNum(1, 12);
        this.m_nCrystalVals[2].m_nValue = this.genRandNum(1, 12);
        this.m_nCrystalVals[3].m_nValue = this.genRandNum(1, 12);

        // generate a new random value
        this.setRandNum();
       
    }

    // initialize the game
    initialize() {

         // add some random values to represent the crystals
         this.m_nCrystalVals.push(new Crystal(this.genRandNum(1, 12)));
         this.m_nCrystalVals.push(new Crystal(this.genRandNum(1, 12)));
         this.m_nCrystalVals.push(new Crystal(this.genRandNum(1, 12)));
        this.m_nCrystalVals.push(new Crystal(this.genRandNum(1, 12)));
        
        this.setRandNum();
       // this.reset();
    }


    checkForInput() {
        // get a handle to the game
        var hGame = this;

        // crystal 1
        $("#crystal-1").click(function () {

            // change the players score
            hGame.changePlayersScore(hGame.m_nCrystalVals[0].m_nValue);

            // if the crystal is hidden, unhide it
            // if (hGame.m_nCrystalVals[0].m_bIsHidden) {
            //     hGame.m_nCrystalVals[0].m_bIsHidden = false;

            // }

    });

        // crystal 2
        $("#crystal-2").click(function () {

            // change the players score
            hGame.changePlayersScore(hGame.m_nCrystalVals[1].m_nValue);

      
         });

        // crystal 3
        $("#crystal-3").click(function () {

            // change the players score
            hGame.changePlayersScore(hGame.m_nCrystalVals[2].m_nValue);

    
        });

        // crystal 4
        $("#crystal-4").click(function () {

            // change the players score
            hGame.changePlayersScore(hGame.m_nCrystalVals[3].m_nValue);

        });
    }
    setRandNum() {
          // generate a number for the user to guess
          this.m_nRandomNum = this.genRandNum(19, 120);
          $("#randomNum").text(this.m_nRandomNum);
   
    }
    genRandNum(min, max) {  
        return Math.floor(Math.random() * max) + min;
       
         }

    checkPlayersScore() {

        // get a handle to the game
        var hGame = this;

        // if players score is equal to the random number they won
        if (hGame.m_nPlayerScore === hGame.m_nRandomNum) {
            console.log("You have won!");
            hGame.m_nNumWins++;
            $("#numWins").text(hGame.m_nNumWins);
            hGame.reset();
        }

        // if the players score is over the random number they lost
        if (hGame.m_nPlayerScore > hGame.m_nRandomNum) {
            console.log("You have lost!");
            hGame.m_nNumLoses++;
            $("#numLosses").text(hGame.m_nNumLoses);
            hGame.reset();
        }
    }

    
    changePlayersScore(_nVal) {

        // add the value to the players score
        this.m_nPlayerScore += _nVal;

        // change the pages text to reflect the new score
        $("#playerScore").text(this.m_nPlayerScore);

        // check if the score matches the random number
        this.checkPlayersScore();

    }
}


/**********************************************************************
 * Game logic
 **********************************************************************/

var game = new Game();
game.initialize();
game.checkForInput();




